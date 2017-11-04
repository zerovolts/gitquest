import {observable, computed} from "mobx"

class UserPage {
  @observable tabs = ["Overview", "Repositories", "Network", "Achievements"]
  @observable currentTab = this.tabs[0]
  @observable login = null

  constructor() {
    this.switchTab = this.switchTab.bind(this)
  }

  switchTab(id) {
    this.currentTab = id
  }

  loadUser(login, store) {
    if (login != this.login) {
      this.login = login
      store.loadUser(login)
    }
  }
}

export default UserPage
