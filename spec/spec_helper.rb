RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
  config.filter_run_when_matching :focus
  config.example_status_persistence_file_path = "spec/examples.txt"
  config.disable_monkey_patching!

  if config.files_to_run.one?
    config.default_formatter = "doc"
  end

  config.profile_examples = 10
  config.order = :random

  Kernel.srand config.seed
end

# user data structures
GITHUB_USER_DATA = {
  "provider" => "github",
  "uid" => "112358",
  "credentials" => {
    "token" => "11235813213455"
  },
  "extra" => {
    "raw_info" => {
      "name" => "Zach Stone",
      "login" => "zerovolts",
      "email" => nil,
      "url" => "https://github.com/zerovolts",
      "location" => "Boston, MA",
      "avatar_url" => "https://avatars1.githubusercontent.com/u/5137257?v=4",
      "bio" => nil,
      "public_repos" => 4,
      "followers" => 2,
      "following" => 512,
      "hireable" => false,
      "created_at" => "2013-08-01T10:00:33Z",
      "updated_at" => "2017-11-13T17:22:55Z"
    }
  }
}
