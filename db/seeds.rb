# Achievement.create(
#   name: ""
#   description: ""
#   value: 1)


Achievement.create(
  name: "Join GitQuest",
  slug: "join-gitquest",
  description: "Create an account on GitQuest.io",
  value: 1)

Achievement.create(
  name: "First Repo!",
  slug: "first-repo",
  description: "Create your first repository.",
  value: 1)

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
