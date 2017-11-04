import {observable, computed} from "mobx"

const blankAchievement = Array(9).fill(0).map((_, i) => ({
  id: i,
  name: "",
  description: ""
}))

const blankAchievementList = {
  owned: blankAchievement,
  available: []
}

class AchievementList {
  @observable achievementsSeparated = blankAchievementList

  @computed get achievements() {
    const keys = Object.keys(this.achievementsSeparated)
    const labeledAchievements = keys.map(key =>
      this.achievementsSeparated[key].map(achievement =>
        Object.assign({owned: (key == "owned" ? true : false)}, achievement)
      )
    )
    return labeledAchievements[0].concat(labeledAchievements[1])
  }

  load(login) {
    fetch(`/api/v1/users/${login}/achievements`, {credentials: "same-origin"})
      .then(res => res.json())
      .then(data => {
        this.achievementsSeparated = data
      })
  }
}

export default AchievementList
