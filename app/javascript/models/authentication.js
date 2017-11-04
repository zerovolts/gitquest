import {observable, computed} from "mobx"

class Authentication {
  @observable currentUser = {}

  load() {
    fetch("/current-user", {credentials: "same-origin"})
      .then(res => res.json())
      .then(data => {
        this.currentUser = data
      })
  }
}

export default Authentication
