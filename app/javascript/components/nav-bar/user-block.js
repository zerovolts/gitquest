import React from "react"
import {Link} from "react-router-dom"
import {observer} from "mobx-react"

import UserDropdown from "./user-dropdown"

const UserBlock = observer(({vm, currentUser}) => {
  const dropdown = vm.showDropdown
    ? <UserDropdown vm={vm} currentUser={currentUser} />
    : null

  const caret = vm.showDropdown ? "fa fa-caret-up" : "fa fa-caret-down"

  return (
    <div className="user-block">
      <Link to={"/" + currentUser.login}>
        <img
          src={currentUser.avatar_url}
          className="nav-avatar">
        </img>
      </Link>
      {currentUser.login}
      <span onClick={vm.toggleDropdown} className="dropdown-button">
        <i className={caret} aria-hidden="true"></i>
      </span>
      {dropdown}
    </div>
  )
})


export default UserBlock
