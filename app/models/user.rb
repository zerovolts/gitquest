class User < ApplicationRecord
  has_many :achievement_ownerships
  has_many :achievements, through: :achievement_ownerships

  def self.create_with_omniauth(auth)
    info = auth["extra"]["raw_info"]

    new_user = create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]

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

    new_user.recalculate_achievements
    new_user
  end

  def recalculate_achievements
    #TODO: actually calculate achievements
    Achievement.find_by(slug: "join-gitquest").grant(self)
  end
end
