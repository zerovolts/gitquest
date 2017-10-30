import React from 'react'
import { Link, Redirect, withRouter } from "react-router-dom"

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.signOut = this.signOut.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  handleChange(event) {
    this.setState({
      searchString: event.target.value
    })
  }

  signIn() {
    window.location.replace("/auth/github")
    //this.props.history.push("/auth/github")
  }

  signOut() {
    window.location.replace("/signout")
    //this.props.history.push("/signout")
  }

  render() {
    let userDropdown
    if (this.props.currentUser) {
      console.log(this.props.currentUser)
      userDropdown = (
        <div>
          <img
            src={this.props.currentUser.avatar_url}
            className="nav-avatar">
          </img>
          {this.props.currentUser.name}
          <a href="/signout">Sign out</a>
        </div>
      )
    } else {
      userDropdown = (
        <a href="/auth/github">Sign in</a>
      )
    }
    //<button onClick={this.signOut}>Sign out</button>

    return (
      <div className="nav-bar">
        <div className="grid-x">
          <div className="small-full medium-4 large-offset-1 large-3 cell">
            <div id="title"><Link to="/">GitQuest</Link></div>
          </div>
          <div className="large-2 cell">
            <input type="text" value={this.state.searchString} onChange={this.handleChange}></input>
          </div>
          <div className="large-1 cell">
            <button onClick={() => {
              if (this.state.searchString) {
                this.props.history.push('/' + this.state.searchString)
              }
            }}>Fetch</button>
          </div>
          <div className="large-2 large-offset-2 cell">
            {userDropdown}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
