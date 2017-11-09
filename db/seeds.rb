achievement_tiers = [
  "novice",
  "apprentice",
  "journeyman",
  "expert",
  "master"
]

Achievement.create(
  name: "Hello World!",
  slug: "hello-world",
  description: "Create an account on GitQuest.io",
  value: 5)

Achievement.create(
  name: "First Repo!",
  slug: "first-repo",
  description: "Create your first repository.",
  value: 15)

Achievement.create(
  name: "20 Repos",
  slug: "20-repos",
  description: "Create 20 repositories.",
  value: 50)

Achievement.create(
  name: "5 Stars",
  slug: "5-stars",
  description: "Get 5 stars on a single repository.",
  value: 200)

(1..5).map {|x| x * 5}.each do |x|
  Achievement.create(
    name: "Level #{x}",
    slug: "level-#{x}",
    description: "Attain level #{x}.",
    value: (x * 10))
end

Achievement.create(
  name: "First Quest!",
  slug: "first-quest",
  description: "Complete your first quest!",
  value: 50)

achievement_tiers.each_with_index.each do |name, index|
  i = (index + 1) * 5
  Achievement.create(
    name: "#{name.capitalize} Quester",
    slug: "#{name}-quester",
    description: "Complete #{i} quests.",
    value: (i * 20))
end

# Last
Achievement.create(
  name: "Completionist",
  slug: "completionist",
  description: "Complete all achievements.",
  value: 1000)
