class Api::V1::ApiController < ApplicationController
  def user
    render json: {login: "zerovolts", name: "Zach Stone"}
  end

  def error
    render json: {error: "Can't find the specified API endpoint."}
  end
end
