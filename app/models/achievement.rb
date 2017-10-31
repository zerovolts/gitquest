class Achievement < ApplicationRecord
  has_many :achievement_ownerships
  has_many :users, through: :achievement_ownerships

  def grant(user)
    AchievementOwnership.create(user: user, achievement: self)
    self.owner_count = AchievementOwnership.where(achievement_id: self.id).length
    self.save
  end
end
