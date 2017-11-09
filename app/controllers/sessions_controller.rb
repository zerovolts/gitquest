class SessionsController < ApplicationController
  #skip_before_action :verify_authenticity_token
  #protect_from_forgery unless: -> { request.format.json? }

  def create
    auth = request.env["omniauth.auth"]
    user = User.find_by_provider_and_uid(
      auth["provider"],
      auth["uid"]
    ) || User.create_with_omniauth(auth)
    
    user.recalculate_achievements
    session[:user_id] = user.id
    redirect_to root_url, :notice => "Signed in!"
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, :notice => "Signed out!"
  end

  def user
    render json: current_user
  end
end
