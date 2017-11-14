class Api::V1::ApiController < ApplicationController
  def error
    render json: {error: "Can't find the specified API endpoint."}
  end
end
