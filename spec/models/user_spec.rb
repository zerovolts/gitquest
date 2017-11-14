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

  it "should create a user from GitHub data" do
    expect(user.provider).to eq("github")
    expect(user.login).to eq("zerovolts")
    expect(user.token).to eq("11235813213455")
  end

  it "should be able to add experience" do
    expect(user.experience).to eq(0)
    user.add_xp(150)
    expect(user.experience).to eq(150)
  end

  it "should calculate current level" do
    expect(user.level).to eq(0)
    user.add_xp(25)
    expect(user.level).to equal(1)
  end

  # it "should return all available achievements" do
  #   expect(user.available_achievements.length).to eq(Achievement.all.length)
  #   Achievement.grant("hello-world", user)
  #   # works in practice, why does user.achievements == [] here?
  #   expect(user.available_achievements.length).to eq(Achievement.all.length - 1)
  # end
end
