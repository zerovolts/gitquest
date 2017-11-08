import React from "react"
import {observer, inject} from "mobx-react"

@inject("store") @observer
class QuestShow extends React.Component {
  componentDidMount() {
    store.quest.loadQuest(this.props.match.params.id)
  }

  render() {
    const quest = store.quest.currentQuest

    const questBlock = (
      <div className="small-6 cell" key={quest.id}>
        <div className="content-card">
        <div className="repo-name">{quest.title}</div>
        <hr />
        <div className="repo-description">{quest.body}</div>
        <div className="repo-value">{quest.reward} xp</div>
        <button
          onClick={() => store.quest.acceptQuest(quest.id)}
          className="accept-button">Accept</button>
        </div>
      </div>
    )

    return (
      <div className="grid-x">
        <div className="small-full medium-8 medium-offset-2 cell">
          {questBlock}
        </div>
      </div>
    )
  }
}

export default QuestShow
