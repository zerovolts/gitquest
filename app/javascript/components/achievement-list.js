import React from "react"
import {observer} from "mobx-react"

import BlockItem from "./block-item"
import AchievementBlock from "./achievement-block"

@observer
class AchievementList extends React.Component {
  componentDidMount() {
    this.props.store.achievementList.load(this.props.login)
  }

  render() {
    const achievements = this.props.store.achievementList.achievements.map(achievement =>
      <div className="small-4 cell" key={achievement.id}>
        <AchievementBlock
          name={achievement.name}
          description={achievement.description}
          owned={achievement.owned} />
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
