import React from "react"
import {observer, inject} from "mobx-react"

import BlockItem from "./block-item"
import AchievementBlock from "./achievement-block"

@inject("store") @observer
class AchievementList extends React.Component {
  render() {
    const achievements = store.achievementList.achievements.map(achievement =>
      <div className="small-4 cell" key={achievement.id}>
        <AchievementBlock
          name={achievement.name}
          description={achievement.description}
          owned={achievement.owned}
          value={achievement.value} />
      </div>
    )

    return (
      <div className="grid-x">
        {achievements}
      </div>
    )
  }
}

export default AchievementList
