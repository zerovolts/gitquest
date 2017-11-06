import NavBar from "./nav-bar"
import UserPage from "./user-page"
import QuestsPage from "./quests-page"

const vmStore = {}

vmStore.navBar = new NavBar()
vmStore.userPage = new UserPage()
vmStore.questsPage = new QuestsPage()

export default vmStore
