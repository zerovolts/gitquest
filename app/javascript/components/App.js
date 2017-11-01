import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import UserPage from './UserPage'
import Footer from './Footer'

const GuildPage = props => (
  <h1>Guild</h1>
)

const QuestsPage = props => (
  <h1>Quests</h1>
)

const ExplorePage = props => (
  <h1>Explore</h1>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }

    this.loadCurrentUser = this.loadCurrentUser.bind(this)
  }

  loadCurrentUser() {
    fetch("/current-user", {credentials: "same-origin"})
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentUser: data
        })
      })
  }

  componentDidMount() {
    this.loadCurrentUser()
  }

  render() {
    return (
      <div className="app">
        <NavBar
          fetchData={this.fetchData}
          currentUser={this.state.currentUser}
        />
        <Switch>
          <Route exact path="/" render={props =>
            <Home currentUser={this.state.currentUser} />
          } />
          <Route path="/guild" component={GuildPage} />
          <Route path="/quests" component={QuestsPage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/:login" component={UserPage} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
//<Route exact path="/" component={Home} />
export default App;
