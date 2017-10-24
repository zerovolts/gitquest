import React from 'react'

const AchievementBlock = props => {

  return (
    <div className={"achievement-card " + (props.owned ? "" : "achievement-unowned")}>
      <div className="achievement-name">{props.name}</div>
      <hr />
      <div className="achievement-description">{props.description}</div>
    </div>
  )
}

export default AchievementBlock
