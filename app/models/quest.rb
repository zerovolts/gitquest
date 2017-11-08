class Quest < ApplicationRecord
  belongs_to :assignee, class_name: "User", optional: true
  belongs_to :repository

  def self.github_create(quest_data)
    new_issue_data = {
      title: quest_data[:title],
      body: quest_data[:body]
      #assignees: [self.assignee.login]
    }

    repo = Repository.find(quest_data[:repository_id])

    res = RestClient.post(
      "https://api.github.com/repos/#{repo.user.login}/#{repo.name}/issues",
      new_issue_data.to_json,
      {"Authorization": "token #{repo.user.token}"}
    )
    data = JSON.parse(res.body)

    quest = Quest.create(
      title: quest_data[:title],
      github_id: data["id"],
      github_url: data["url"],
      state: false,
      body: quest_data[:body],
      reward: quest_data[:reward],
      repository_id: quest_data[:repository_id]
    )

    return quest
  end

  def as_json(options = {})
    super(methods: :repository)
  end
end
