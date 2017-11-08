import React from "react"
import {observer, inject} from "mobx-react"

const QuestLog = inject("store")(observer(props => {
  const active = store.quest.active
  const completed = store.quest.completed

  const activeQuests = active.map(quest =>
    <div className="small-6 cell" key={quest.id}>
      <div className="content-card">
      <a href={`/quests/${quest.id}`}><div className="repo-name">{quest.title}</div></a>
      <hr />
      <div className="repo-description">{quest.body}</div>
      <div className="repo-value">{quest.reward} xp</div>
      <button
        onClick={() => store.quest.abandonQuest(quest.id)}
        className="abandon-button">Abandon</button>
      </div>
    </div>
  )

  const completedQuests = completed.map(quest =>
    <div></div>
  )

  return (
    <div className="grid-x">
      {activeQuests}
      <hr />
      {completedQuests}
    </div>
  )
}))

export default QuestLog
