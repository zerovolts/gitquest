import {observable, computed} from "mobx"

class Quest {
  @observable currentQuest = {}
  @observable available = []
  @observable owned = []
  @observable login = null

  @computed get active() {
    return this.owned.filter(quest => quest.is_complete == false)
  }

  @computed get completed() {
    return this.owned.filter(quest => quest.is_complete == true)
  }

  acceptQuest(id) {
    fetch(`/api/v1/quests/${id}/accept`, {credentials: "same-origin"})
      .then(() => {
        this.loadQuests(this.login)
      })
  }

  abandonQuest(id) {
    fetch(`/api/v1/quests/${id}/abandon`, {credentials: "same-origin"})
      .then(() => {
        this.loadQuests(this.login)
      })
  }

  loadQuests(login) {
    this.login = login
    this.loadUserQuests(this.login)
    this.loadAvailableQuests()
  }

  loadAvailableQuests() {
    fetch(`/api/v1/quests`, {credentials: "same-origin"})
      .then(res => res.json())
      .then(data => {
        this.available = data
      })
  }

  loadUserQuests(login) {
    fetch(`/api/v1/users/${login}/quests`, {credentials: "same-origin"})
      .then(res => res.json())
      .then(data => {
        this.owned = data
      })
  }

  loadQuest(id) {
    fetch(`/api/v1/quests/${id}`, {credentials: "same-origin"})
      .then(res => res.json())
      .then(data => {
        this.currentQuest = data
      })
  }
}

export default Quest
