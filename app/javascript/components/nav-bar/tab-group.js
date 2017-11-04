import React from "react"
import {Link} from "react-router-dom"
import {observer} from "mobx-react"

import Tab from "./tab"

const TabGroup = observer(({vm, path}) => {
  return ([
    <div className="large-1 large-offset-1 cell" key="1">
      <Link to="/">
        <div className="nav-tab">
          Profile
        </div>
      </Link>
    </div>,
    <Tab title="Guild" url="/guild" path={path} key="2" />,
    <Tab title="Quests" url="/quests" path={path} key="3" />,
    <Tab title="Explore" url="/explore" path={path} key="4" />,
    <div className="large-1 cell" key="5">
      <i className="fa fa-search search-icon" aria-hidden="true" onClick={vm.toggleSearch}></i>
    </div>
  ])
})

export default TabGroup
