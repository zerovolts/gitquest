import React from "react"
import {Link, withRouter} from "react-router-dom"
import {observer, inject} from "mobx-react"

import UserBlock from "./user-block"
import SearchBar from "./search-bar"
import TabGroup from "./tab-group"

const NavBar = inject("store", "vmStore")(observer(({location, history}) => {
  const currentUser = store.auth.currentUser
  const vm = vmStore.navBar
  
  const userBlock = currentUser
    ? <UserBlock vm={vm} currentUser={currentUser} />
    : <div className="sign-in-block" onClick={vm.signIn}>Sign in</div>

  const tabsOrSearch = vm.showSearch
    ? <SearchBar vm={vm} history={history} />
    : <TabGroup vm={vm} path={location.pathname} />

  return (
    <div className="nav-bar">
      <div className="grid-x">
        <div className="small-full medium-4 large-offset-1 large-2 cell">
          <div id="title"><Link to="/">GitQuest</Link></div>
        </div>
        {tabsOrSearch}
        <div className="large-2 cell">
          {userBlock}
        </div>
      </div>
    </div>
  )
}))

export default withRouter(NavBar)
