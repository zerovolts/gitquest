import NavBar from "./nav-bar"
import UserPage from "./user-page"

const vmStore = {}

vmStore.navBar = new NavBar()
vmStore.userPage = new UserPage()

export default vmStore
