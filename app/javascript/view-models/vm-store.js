import NavBar from "./nav-bar"
import UserPage from "./user-page"
import QuestsNew from "./quests-new"

const vmStore = {}

vmStore.navBar = new NavBar()
vmStore.userPage = new UserPage()
vmStore.questsNew = new QuestsNew()

export default vmStore
