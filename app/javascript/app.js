import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import NavBar from "./components/nav-bar"
import Footer from "./components/footer"
import HomePage from "./pages/home-page"
import UserPage from "./pages/user-page"
import GuildPage from "./pages/guild-page"
import QuestsPage from "./pages/quests-page"
import ExplorePage from "./pages/explore-page"

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
              <HomePage currentUser={this.state.currentUser} />
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
