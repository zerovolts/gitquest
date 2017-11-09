class Quest < ApplicationRecord
  belongs_to :assignee, class_name: "User", optional: true
  belongs_to :repository

  validate :assignee_is_not_owner
  validates :title, presence: true, length: {minimum: 3}
  validates :body, presence: true, length: {minimum: 20}
  validates :github_id, presence: true
  validates :github_url, presence: true
  validates :is_complete, presence: true
  validates :reward, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 0
  }

  def assignee_is_not_owner
    if assignee == repository.user
      errors.add(:assignee, "cannot be the same as repository owner")
    end
  end

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

  def complete
    self.update(is_complete: true)

  end

  def as_json(options = {})
    super(methods: :repository)
  end
end
