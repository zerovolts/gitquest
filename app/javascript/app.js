import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import NavBar from "./components/nav-bar"
import Home from "./components/home"
import UserPage from "./components/user-page"
import Footer from "./components/footer"

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
      <BrowserRouter>
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
      </BrowserRouter>
    )
  }
}
//<Route exact path="/" component={Home} />
export default App;
