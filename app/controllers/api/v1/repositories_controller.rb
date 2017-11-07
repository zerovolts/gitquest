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

    if @repository.link
      render json: @repository
    else
      render json: {status: "webhook could not be created"}
    end
  end

  def unlink
    @repository = Repository.find_by(user: current_user, name: params[:repo_slug])
    if @repository.unlink
      render json: {status: "deleted webhook"}
    else
      render json: {status: "could not delete webhook"}
    end
  end
end
