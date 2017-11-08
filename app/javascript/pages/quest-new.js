import React from "react"
import {observer, inject} from "mobx-react"

@inject("store", "vmStore") @observer
class QuestNew extends React.Component {
  render() {
    const quest = vmStore.questsNew

    return (
      <div className="grid-x">
        <div className="small-full medium-8 medium-offset-2 cell">
          <div className="grid-x">
              <div className="quest-label small-2 cell">Title:</div>
              <div className="small-8 cell">
                <input type="text" name="titleInput" value={quest.titleInput} onChange={quest.handleChange}></input>
              </div>
              <hr />

              <div className="quest-label small-2 cell">Body:</div>
              <div className="small-8 cell">
                <input type="text" name="bodyInput" value={quest.bodyInput} onChange={quest.handleChange}></input>
              </div>

              <div className="quest-label small-2 cell">Reward</div>
              <div className="small-8 cell">
                <input type="text" name="rewardInput" value={quest.rewardInput} onChange={quest.handleChange}></input>
              </div>

              <div className="quest-label small-2 cell">Repository</div>

              <div className="small-8 cell">
                <select name="repositoryIdInput" onChange={quest.handleChange}>
                  {store.githubUser.linked_repos.map(repo =>
                    <option value={repo.id} key={repo.id}>{repo.name}</option>
                  )}
                </select>
              </div>

              <button onClick={event => vmStore.questsNew.handleSubmit(event, store.quest)}>
                Submit
              </button>
          </div>
        </div>
      </div>
    )
  }
}
//<input type="text" name="repositoryIdInput" value={quest.repositoryIdInput} onChange={quest.handleChange}></input>

export default QuestNew
