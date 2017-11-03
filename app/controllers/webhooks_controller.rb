class WebhooksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    user = current_user
    repo_slug = params[:repo]

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
      api_url(user.login, repo_slug),
      new_webhook_data.to_json,
      {"Authorization": "token #{user.token}"}
    )
    data = JSON.parse(res.body)

    render json: data
  end

  def callback
    puts params
  end

  def show
    user = current_user
    repo_slug = params[:repo_slug]

    res = RestClient.get(api_url(user.login, repo_slug), {
      "Authorization": "token #{user.token}"
    })
    data = JSON.parse(res.body)

    render json: data
  end

  def api_url(user_slug, repo_slug)
    "https://api.github.com/repos/#{user_slug}/#{repo_slug}/hooks"
  end
end
