class Achievement < ApplicationRecord
  has_many :achievement_ownerships
  has_many :users, through: :achievement_ownerships

  ACHIEVEMENT_PREDICATES = {
    "hello-world" => lambda {|user| true},
    "first-repo" => lambda {|user| user.public_repos >= 1},
    "20-repos" => lambda {|user| user.public_repos >= 20},
    "level-5" => lambda {|user| false},
    "novice-quester" => lambda {|user| false},
    "level-25" => lambda {|user| false}
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
    owner_count = AchievementOwnership.where(achievement_id: self.id).length
    self.update(owner_count: owner_count)
  end
end
