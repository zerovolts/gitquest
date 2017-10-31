class Api::V1::AchievementsController < ApplicationController
  def index
    achievements = Achievement.all
    render json: achievements
  end

  def show
    achievements = Achievement.all
    user = User.find_by(login: params[:login])
    owned_achievements = []
    available_achievements = achievements

    if user
      owned_achievements = user.achievements
      available_achievements = user.available_achievements
    end

    render json: {
      owned: owned_achievements,
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
