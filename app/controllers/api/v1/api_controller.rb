class Api::V1::ApiController < ApplicationController
  def user
    render json: {login: "zerovolts", name: "Zach Stone"}
  end
end
