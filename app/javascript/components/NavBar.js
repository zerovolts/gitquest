import React from 'react'
import { Link, withRouter } from "react-router-dom"

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      searchString: event.target.value
    })
  }

  render() {
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
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
