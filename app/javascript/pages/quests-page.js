import React from "react"
import {observer, inject} from "mobx-react"

@inject("vmStore") @observer
class QuestsPage extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   repoName: ""
    // }

    //this.handleChange = this.handleChange.bind(this)
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

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  handleSubmit(event) {
    event.preventDefault()
    let payload = {
      repo: vmStore.titleInput
    }
    this.createWebhook(payload)
  }

  render() {
    return (
      <div className="grid-x">
        <div className="small-full medium-8 medium-offset-2 cell">
          <input
            type="text"
            name="titleInput"
            value={console.log(this.props), vmStore.titleInput}
            onChange={vmStore.handleChange}
          />
          <button onClick={vmStore.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default QuestsPage
