require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do
  let!(:user) do
    User.create_with_omniauth(GITHUB_USER_DATA)
  end

  describe "get#show" do
    it "returns the user of a given login" do
      get :show, params: {login: "zerovolts"}
      data = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(response.content_type).to eq("application/json")

      expect(data["name"]).to eq("Zach Stone")
      expect(data["level"]).to eq(0)
    end
  end
end
