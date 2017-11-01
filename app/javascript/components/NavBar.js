import React from 'react'
import { Link, Redirect, withRouter } from "react-router-dom"
import UserDropdown from "./UserDropdown"

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: "",
      showDropdown: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.signOut = this.signOut.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.signIn = this.signIn.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleChange(event) {
    this.setState({
      searchString: event.target.value
    })
  }

  handleEnter(event) {
    if ((event.key == "Enter") && this.state.searchString) {
      this.props.history.push("/" + this.state.searchString)
    }
  }

  signIn() {
    window.location.replace("/auth/github")
  }

  signOut() {
    window.location.replace("/signout")
    this.setState({
      showDropdown: false
    })
  }

  toggleDropdown() {
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }

  render() {
    let userBlock = null
    let userDropdown = null
    if (this.props.currentUser) {
      userBlock = (
        <div className="user-block">
          <a href={`/${this.props.currentUser.login}`}>
            <img
              src={this.props.currentUser.avatar_url}
              className="nav-avatar">
            </img>
          </a>
          {this.props.currentUser.login}
          <span onClick={this.toggleDropdown} className="dropdown-button">
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </span>
        </div>
      )
      userDropdown = this.state.showDropdown
        ? <UserDropdown currentUser={this.props.currentUser} />
        : null
    } else {
      userBlock = (
        <div className="sign-in-block" onClick={this.signIn}>Sign in</div>
      )
    }
    //<button onClick={this.signOut}>Sign out</button>

    return (
      <div className="nav-bar">
        <div className="grid-x">
          <div className="small-full medium-4 large-offset-1 large-2 cell">
            <div id="title"><Link to="/">GitQuest</Link></div>
          </div>
          <div className="large-3 cell">
          <div className="search-bar">
            <input type="text" value={this.state.searchString} onChange={this.handleChange} onKeyPress={this.handleEnter}></input>
            </div>
          </div>
          <div className="large-2 large-offset-3 cell">
            {userBlock}
          </div>
          {userDropdown}
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
