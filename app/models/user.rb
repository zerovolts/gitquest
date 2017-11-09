class User < ApplicationRecord
  has_many :achievement_ownerships
  has_many :achievements, through: :achievement_ownerships
  has_many :quests, foreign_key: :assignee_id

  validates :provider, presence: true
  validates :uid, presence: true
  validates :token, presence: true
  validates :login, presence: true
  validates :github_url, presence: true
  validates :experience, presence: true
  validates :coins, presence: true

  def self.create_with_omniauth(auth)
    info = auth["extra"]["raw_info"]
    credentials = auth["credentials"]

    new_user = create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]

      user.token = credentials["token"]
      user.name = info["name"]
      user.login = info["login"]
      user.email = info["email"]
      user.github_url = info["url"]
      user.location = info["location"]
      user.avatar_url = info["avatar_url"]
      user.bio = info["bio"]
      user.public_repos = info["public_repos"]
      user.followers = info["followers"]
      user.following = info["following"]
      user.hireable = info["hireable"]
      user.github_created_at = info["created_at"]
      user.github_updated_at = info["updated_at"]
    end

    new_user
  end

  def level
    (0.25 * Math.sqrt(experience)).floor
  end

  def add_xp(xp)
    update(experience: experience + xp)
  end

  def experience_data
    lvl = level
    this_level_total_xp = ((lvl / 0.25) ** 2).floor
    next_level_total_xp = (((lvl + 1) / 0.25) ** 2).floor
    xp_this_level = experience - this_level_total_xp
    xp_to_next_level = next_level_total_xp - this_level_total_xp
    completion_percent = ((xp_this_level / xp_to_next_level.to_f) * 100).floor

    return {
      this_level_total_xp: this_level_total_xp,
      next_level_total_xp: next_level_total_xp,
      xp_this_level: xp_this_level,
      xp_to_next_level: xp_to_next_level,
      remaining_xp: xp_to_next_level - xp_this_level,
      completion_percent: completion_percent
    }
  end

  def recalculate_achievements
    new_achievements = Achievement.unsynchronized(self)
    new_achievements.each do |achievement_slug|
      Achievement.grant(achievement_slug, self)

      achievement = Achievement.find_by(slug: achievement_slug)
      add_xp(achievement.value)
    end
  end

  def available_achievements
    Achievement.all.select do |achievement|
      self.achievements.none? do |owned_achievement|
        owned_achievement.id == achievement.id
      end
    end
  end

  def completed_quests
    quests.select {|quest| quest.is_complete}
  end

  def as_json(options = {})
    super(methods: [
      :level,
      :experience_data
    ])
  end
end
