require "rails_helper"

RSpec.describe User, type: :model do
  let!(:user) do
    User.create_with_omniauth(GITHUB_USER_DATA)
  end

  let!(:achievement) do
    Achievement.create(
      name: "Hello World!",
      slug: "hello-world",
      description: "Create an account on GitQuest.io",
      value: 10)
  end

  # it "recalculates owners" do
  #   expect(achievement.owner_count).to eq(0)
  #   Achievement.grant(achievement.slug, user)
  #   expect(achievement.owner_count).to eq(1)
  # end
end
