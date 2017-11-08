import Authentication from "./authentication"
import AchievementList from "./achievements"
import Quest from "./quest"
import GitHubUser from "./github-user"

const store = {}

store.auth = new Authentication()
store.achievementList = new AchievementList()
store.githubUser = new GitHubUser()
store.quest = new Quest()

export default store
