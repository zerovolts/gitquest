import React from "react"
import {observer} from "mobx-react"

import Profile from "../components/profile"
import TabGroup from "../components/tab-group"
import ContentArea from "../components/content-area"

@observer
class UserPage extends React.Component {
  componentDidMount() {
    this.props.vm.loadUser(this.props.match.params.login, this.props.user)
  }

  componentDidUpdate() {
    this.props.vm.loadUser(this.props.match.params.login, this.props.user)
  }

  render() {
    return (
      <div className="grid-x">
        <div className="small-full medium-4 large-offset-1 large-3 cell">
          <Profile profile={this.props.user.user} stats={this.props.user.stats} />
        </div>
        <div className="small-full medium-8 large-7 cell">
          <TabGroup
            tabs={this.props.vm.tabs}
            currentTab={this.props.vm.currentTab}
            switchTab={this.props.vm.switchTab}
          />
          <ContentArea
            currentTab={this.props.vm.currentTab}
            repos={this.props.user.repos}
            stats={this.props.user.stats}
            login={this.props.vm.login}
          />
        </div>
      </div>
    )
  }
}

export default UserPage
