import React from "react"

const UserDropdown = props => {
  return (
    <div className="user-dropdown">
      <a href={`/${props.currentUser.login}`}>
        <div className="user-dropdown-selection">
          Profile
        </div>
      </a>
      <a href="/signout">
        <div className="user-dropdown-selection">
          Sign Out
        </div>
      </a>
    </div>
  )
}

export default UserDropdown
