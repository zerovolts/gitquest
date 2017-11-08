import React from "react"
import {observer, inject} from "mobx-react"

import Profile from "../components/profile"
import TabGroup from "../components/tab-group"
import ContentArea from "../components/content-area"

@inject("store", "vmStore") @observer
class UserPage extends React.Component {
  componentDidMount() {
    vmStore.userPage.loadUser(this.props.login, store.githubUser)
    store.githubUser.loadLinkedRepos()
    store.achievementList.load(this.props.login)
    store.quest.loadQuests(this.props.login)
  }

  componentDidUpdate() {
    vmStore.userPage.loadUser(this.props.login, store.githubUser)
    store.achievementList.load(this.props.login)
    store.quest.loadQuests(this.props.login)
  }

  render() {
    return (
      <div className="grid-x">
        <div className="small-full medium-4 large-offset-1 large-3 cell">
          <Profile profile={store.githubUser.user} stats={store.githubUser.stats} />
        </div>
        <div className="small-full medium-8 large-7 cell">
          <TabGroup
            tabs={vmStore.userPage.tabs}
            currentTab={vmStore.userPage.currentTab}
            switchTab={vmStore.userPage.switchTab}
          />
          <ContentArea
            currentTab={vmStore.userPage.currentTab}
            repos={store.githubUser.repos}
            stats={store.githubUser.stats}
            login={vmStore.userPage.login}
          />
        </div>
      </div>
    )
  }
}

export default UserPage
