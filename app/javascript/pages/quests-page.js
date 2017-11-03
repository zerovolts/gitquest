import React from "react"

class QuestsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repoName: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.createWebhook = this.createWebhook.bind(this)
  }

  createWebhook(payload) {
    fetch("/webhooks.json", {
      credentials: "same-origin",
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let payload = {
      repo: this.state.repoName
    }
    this.createWebhook(payload)
  }

  render() {
    return (
      <div className="grid-x">
        <div className="small-full medium-8 medium-offset-2 cell">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="repoName"
              value={this.state.repoName}
              onChange={this.handleChange}
            />
            <button type="submit" value="Submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

// const QuestsPage = props => (
//   <h1>Quests</h1>
// )

export default QuestsPage
