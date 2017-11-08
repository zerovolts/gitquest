import {observable, computed} from "mobx"

class QuestsNew {
  @observable titleInput = ""
  @observable bodyInput = ""
  @observable rewardInput = 0
  @observable repositoryIdInput = 0

  constructor() {
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this[event.target.name] = event.target.value
  }

  handleSubmit(event, questStore) {
    event.preventDefault()
    this.createQuest({
      title: this.titleInput,
      body: this.bodyInput,
      reward: this.rewardInput,
      repository_id: this.repositoryIdInput,
    }).then(() => {
      questStore.loadAvailableQuests()
    })
  }

  createQuest(payload) {
    return fetch(`/api/v1/quests.json`, {
      credentials: "same-origin",
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    })
  }
}

export default QuestsNew
