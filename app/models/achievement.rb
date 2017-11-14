class Achievement < ApplicationRecord
  has_many :achievement_ownerships
  has_many :users, through: :achievement_ownerships

  validates :slug, presence: true, uniqueness: true
  validates :name, presence: true
  validates :description, presence: true
  validates :value, presence: true
  validates :owner_count, presence: true

  ACHIEVEMENT_PREDICATES = {
    "hello-world" => lambda {|user| true},
    "first-repo" => lambda {|user| user.public_repos >= 1},
    "20-repos" => lambda {|user| user.public_repos >= 20},
    "level-5" => lambda {|user| user.level >= 5},
    "level-10" => lambda {|user| user.level >= 10},
    "level-15" => lambda {|user| user.level >= 15},
    "level-20" => lambda {|user| user.level >= 20},
    "level-25" => lambda {|user| user.level >= 25},
    "novice-quester" => lambda {|user| user.completed_quests.length >= 1},
    "apprentice-quester" => lambda {|user| user.completed_quests.length >= 5},
    "journeyman-quester" => lambda {|user| user.completed_quests.length >= 10},
    "expert-quester" => lambda {|user| user.completed_quests.length >= 15},
    "master-quester" => lambda {|user| user.completed_quests.length >= 20},
    "completionist" => lambda {|user| user.achievements.length >= Achievement.all.length - 1},
  }

  # return achievements that have been completed, but not saved
  def self.unsynchronized(user)
    new_achievement_slugs = user.available_achievements
      .map(&:slug).select do |achievement_slug|
        # call each available achievement predicate on the user
        ACHIEVEMENT_PREDICATES[achievement_slug]&.call(user)
      end
    new_achievement_slugs
  end

  def self.grant(slug, user)
    achievement = Achievement.find_by(slug: slug)
    AchievementOwnership.create(user: user, achievement: achievement)
    achievement.recalculate_owners
  end

  def recalculate_owners
    new_owner_count = AchievementOwnership.where(achievement_id: self.id).length
    self.update(owner_count: new_owner_count)
  end
end
