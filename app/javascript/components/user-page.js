import React from "react"

import Profile from "./profile"
import TabGroup from "./tab-group"
import ContentArea from "./content-area"
import fetchDataHelper from "../helpers/fetch-data"
import calculateStats from "../helpers/calculate-stats"

const tabs = ["Overview", "Repositories", "Network", "Achievements"]

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: tabs[0],
      login: null,
      user: null,
      repos: null,
      data: null,
      stats: null
    }

    this.switchTab = this.switchTab.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.loadUser()
  }

  componentDidUpdate() {
    this.loadUser()
  }

  switchTab(id) {
    this.setState({
      currentTab: id
    })
  }

  loadUser() {
    if (this.props.match.params.login != this.state.login) {
      this.setState({
        login: this.props.match.params.login
      })
      this.fetchData(this.props.match.params.login)
    }
  }

  fetchData(login) {
    fetchDataHelper(login)
      .then(response => {
        return response.json()
      })
      .then(json => {
        const repos = json.data.user.repositories.nodes
          .filter(repo => !repo.isFork)
          .filter(repo => repo.owner.login == json.data.user.login)

        const stats = calculateStats(repos)

        this.setState({
          data: json.data,
          repos: repos,
          user: json.data.user,
          stats: stats
        })
      })
  }

  render() {
    //const params = new URLSearchParams(this.props.location.search)
    //const tab = params.get("tab")

    return (
      <div className="grid-x">
        <div className="small-full medium-4 large-offset-1 large-3 cell">
          <Profile profile={this.state.user} stats={this.state.stats} />
        </div>
        <div className="small-full medium-8 large-7 cell">
          <TabGroup
            tabs={tabs}
            currentTab={this.state.currentTab}
            switchTab={this.switchTab}
          />
          <ContentArea
            currentTab={this.state.currentTab}
            repos={this.state.repos}
            stats={this.state.stats}
            login={this.state.login}
          />
        </div>
      </div>
    )
  }
}

export default UserPage
