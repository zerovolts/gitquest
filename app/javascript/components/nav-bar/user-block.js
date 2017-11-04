import React from "react"
import {observer} from "mobx-react"

import UserDropdown from "./user-dropdown"

const UserBlock = observer(({vm, currentUser}) => {
  const dropdown = vm.showDropdown
    ? <UserDropdown currentUser={currentUser} />
    : null

  return (
    <div className="user-block">
      <a href={`/${currentUser.login}`}>
        <img
          src={currentUser.avatar_url}
          className="nav-avatar">
        </img>
      </a>
      {currentUser.login}
      <span onClick={vm.toggleDropdown} className="dropdown-button">
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </span>
      {dropdown}
    </div>
  )
})


export default UserBlock
