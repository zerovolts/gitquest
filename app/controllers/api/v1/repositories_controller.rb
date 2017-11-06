class Api::V1::RepositoriesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @repositories = Repository.where(user: current_user, linked: true)
    render json: @repositories
  end

  def link
    @repository = Repository.find_by(user: current_user, name: params[:name])

    if !@repository
      @repository = Repository.create(
        name: params["name"],
        github_url: params["url"],
        stars: params["stargazers"]["totalCount"],
        description: params["description"],
        language: params["primaryLanguage"] ? params["primaryLanguage"]["name"] : nil,
        user: current_user
      )
    end

    @repository.link

    # TODO: check if webhook was successful
    render json: @repository
  end

  def repository_params
  end
end
