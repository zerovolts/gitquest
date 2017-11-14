require "rails_helper"

RSpec.describe Api::V1::AchievementsController, type: :controller do
  let!(:user) do
    User.create_with_omniauth(GITHUB_USER_DATA)
  end

  let!(:achievement1) do
    Achievement.create(
      name: "Hello World!",
      slug: "hello-world",
      description: "Create an account on GitQuest.io",
      value: 10)
  end

  let!(:achievement2) do
    Achievement.create(
      name: "First Repo!",
      slug: "first-repo",
      description: "Create your first repository.",
      value: 15)
  end

  describe "get#index" do
    it "should return all achievements" do
      get :index
      data = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(response.content_type).to eq("application/json")

      expect(data.length).to eq(2)
      expect(data[0]["slug"]).to eq("hello-world")
      expect(data[1]["slug"]).to eq("first-repo")
    end
  end

  describe "get#show" do
    it "should return achievements for a specified user" do
      Achievement.grant(achievement1.slug, user)

      get :show, params: {login: user.login}
      data = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(response.content_type).to eq("application/json")

      expect(data["owned"].length).to eq(1)
      expect(data["owned"][0]["slug"]).to eq("hello-world")

      expect(data["available"].length).to eq(1)
      expect(data["available"][0]["slug"]).to eq("first-repo")
    end
  end
end
