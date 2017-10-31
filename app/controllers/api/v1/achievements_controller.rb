class Api::V1::AchievementsController < ApplicationController
  def index
    achievements = Achievement.all
    render json: achievements
  end

  def show
    achievements = Achievement.all
    user = User.find_by(login: params[:login])
    user_achievements = []
    available_achievements = achievements

    if user
      user_achievements = user.achievements

      available_achievements = achievements.select do |achievement|
        user_achievements.none? do |user_achievement|
          user_achievement.id == achievement.id
        end
      end
    end

    render json: {
      owned: user_achievements,
      available: available_achievements
    }
  end

  # unused
  def owned_achievements
    user = User.find_by(login: params[:login])
    achievements = user.achievements
    render json: achievements
  end
end
