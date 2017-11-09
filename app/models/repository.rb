class Repository < ApplicationRecord
  belongs_to :user

  validates :name, presence: true, uniqueness: true
  validates :linked, presence: true
  validates :github_url, presence: true
  validates :stars, presence: true

  def link
    new_webhook_data = {
      name: "web",
      active: true,
      events: [
        "push",
        "pull_request",
        "issues"
      ],
      config: {
        url: "http://gitquest.io/webhooks/github/callback",
        content_type: "json"
      }
    }

    res = RestClient.post(
      api_url(self.user.login, self.name),
      new_webhook_data.to_json,
      {"Authorization": "token #{self.user.token}"}
    )
    data = JSON.parse(res.body)

    if data["active"]
      self.update(webhook_id: data["id"], linked: true)
      return {status: "created"}
    end
    false
  end

  def unlink
    url = api_url(self.user.login, self.name) + "/#{self.webhook_id}"
    res = RestClient.delete(url, {"Authorization": "token #{self.user.token}"})

    #TODO: check for success
    self.update(webhook_id: nil, linked: false)

    return {status: "deleted"}
  end

  def api_url(login, name)
    "https://api.github.com/repos/#{login}/#{name}/hooks"
  end
end
