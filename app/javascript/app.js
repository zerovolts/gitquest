import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import {observer, inject} from "mobx-react"

import NavBar from "./components/nav-bar/nav-bar"
import Footer from "./components/footer"
import HomePage from "./pages/home-page"
import UserPage from "./pages/user-page"
import GuildPage from "./pages/guild-page"
import QuestsPage from "./pages/quests-page"
import ExplorePage from "./pages/explore-page"

@inject("store") @observer
class App extends React.Component {
  componentDidMount() {
    store.auth.load()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/guild" component={GuildPage} />
            <Route path="/quests" component={QuestsPage} />
            <Route path="/explore" component={ExplorePage} />
            <Route path="/:login" render={props =>
              <UserPage login={props.match.params.login} />
            } />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
