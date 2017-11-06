import {observable, computed} from "mobx"

class QuestsPage {
  @observable titleInput = ""
  @observable bodyInput = ""
  @observable rewardInput = 0
  @observable githubRepoInput = null

  constructor() {
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log(event)
    this[event.target.name] = event.target.value
  }

  handleSubmit() {
    this.preventDefault()

  }
}

export default QuestsPage
