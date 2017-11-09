class Api::V1::UsersController < ApplicationController
  def show
    @user = User.find_by(login: params[:login])
    render json: @user
  end
end
