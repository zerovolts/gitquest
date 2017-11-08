import React from "react"
import {Link, withRouter} from "react-router-dom"
import {observer, inject} from "mobx-react"

@inject("store", "vmStore") @observer
class QuestsPage extends React.Component {
  componentDidMount() {
    store.quest.loadAvailableQuests()
  }

  render() {
    const available = store.quest.available

    const availableQuests = available.map(quest =>
      <div className="small-6 cell" key={quest.id}>
        <div className="content-card">
        <a href={`/quests/${quest.id}`}><div className="repo-name">{quest.title}</div></a>
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
          <div className="tab-bar">
            <span className="available-quest-title">Available Quests</span>
            <Link to="/quests/new"><button className="create-quest">Create Quest</button></Link>
          </div>
          <div className="grid-x">
            {availableQuests}
          </div>
        </div>
      </div>
    )
  }
}

export default QuestsPage
