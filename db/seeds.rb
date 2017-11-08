# Achievement.create(
#   name: ""
#   description: ""
#   value: 1)


Achievement.create(
  name: "Hello World!",
  slug: "hello-world",
  description: "Create an account on GitQuest.io",
  value: 1)

Achievement.create(
  name: "First Repo!",
  slug: "first-repo",
  description: "Create your first repository.",
  value: 1)

Achievement.create(
  name: "20 Repos!",
  slug: "20-repos",
  description: "Create 20 repositories.",
  value: 5)

Achievement.create(
  name: "5 Stars",
  slug: "5-stars",
  description: "Get 5 stars on a single repository.",
  value: 1)

Achievement.create(
  name: "Novice Quester",
  slug: "novice-quester",
  description: "Complete your first quest!",
  value: 1)

(1..5).map {|x| x * 5}.each do |x|
  Achievement.create(
    name: "Level #{x}",
    slug: "level-#{x}",
    description: "Attain level #{x}.",
    value: 1)
end

Quest.create(
  title: "Destroy 5 evil bugs",
  github_id: 2,
  github_url: "oh",
  state: false,
  body: "Please help me. These bugs are causing my project to not work. I need you to annihilate the bugs :)",
  reward: 150,
  repository: Repository.first
)

Quest.create(
  title: "Add a \"like\" feature",
  github_id: 1,
  github_url: "k",
  state: false,
  body: "Help me to create a \"like\" feature for my application!",
  reward: 150,
  repository: Repository.first
)
