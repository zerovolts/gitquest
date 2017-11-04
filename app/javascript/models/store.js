import Authentication from "./authentication"
import AchievementList from "./achievements"
import GitHubUser from "./github-user"

const store = {}

store.auth = new Authentication()
store.achievementList = new AchievementList()
store.githubUser = new GitHubUser()

export default store
