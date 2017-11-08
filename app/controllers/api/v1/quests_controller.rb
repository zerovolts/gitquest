class Api::V1::QuestsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    # TODO: pagination
    @quests = Quest.where(assignee: nil)
    render json: @quests
  end

  def show
    @quest = Quest.find(params[:id])
    render json: @quest
  end

  def create
    @quest = Quest.github_create(quest_params)
    render json: @quest
  end

  def quest_log
    @user = User.find_by(login: params[:login])
    @quests = @user.quests
    #@quests = Quest.where(assignee_id: params[:id])

    render json: @quests
  end

  def accept
    @quest = Quest.find(params[:id])
    @quest.update(assignee: current_user)
  end

  def abandon
    @quest = Quest.find(params[:id])
    @quest.update(assignee: nil)
  end

  def quest_params
    params.require(:quest).permit(:title, :body, :reward, :repository_id)
  end
end
