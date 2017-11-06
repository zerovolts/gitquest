import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import {observer} from "mobx-react"

import NavBar from "./components/nav-bar/nav-bar"
import Footer from "./components/footer"
import HomePage from "./pages/home-page"
import UserPage from "./pages/user-page"
import GuildPage from "./pages/guild-page"
import QuestsPage from "./pages/quests-page"
import ExplorePage from "./pages/explore-page"

@observer
class App extends React.Component {
  componentDidMount() {
    this.props.store.auth.load()
  }

  render() {
    const store = this.props.store
    const vmStore = this.props.vmStore

    return (
      <BrowserRouter>
        <div className="app">
          <NavBar
            vm={vmStore.navBar}
            currentUser={store.auth.currentUser}
          />
          <Switch>
            <Route exact path="/" render={props =>
              <HomePage currentUser={store.auth.currentUser} />
            } />
            <Route path="/guild" component={GuildPage} />
            <Route path="/quests" render={props =>
              <QuestsPage vm={vmStore} />
            } />
            <Route path="/explore" component={ExplorePage} />
            <Route path="/:login" render={props =>
              <UserPage
                vm={vmStore.userPage}
                store={store}
                login={props.match.params.login}
              />
            } />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
// {...props}

export default App;
