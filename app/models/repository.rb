class Repository < ApplicationRecord
  belongs_to :user

  def link
    new_webhook_data = {
      name: "web",
      active: true,
      events: [
        "push",
        "pull_request"
      ],
      config: {
        url: "http://gitquest.io/webhooks/github/callback",
        content_type: "json"
      }
    }

    res = RestClient.post(
      "https://api.github.com/repos/#{self.user.login}/#{self.name}/hooks",
      new_webhook_data.to_json,
      {"Authorization": "token #{self.user.token}"}
    )
    data = JSON.parse(res.body)
    self.update(linked: true)

    puts data

    return data
  end

  def unlink
    #TODO: destroy webhook

    self.update(linked: false)
  end
end
