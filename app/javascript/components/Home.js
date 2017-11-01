import React from "react"

const Home = props => {
  let welcome = null
  if (props.currentUser) {
    welcome = (
      <div className="content">
        <h1>Welcome back, {props.currentUser.name}!</h1>
        <p>Here are your active quests that you haven't completed yet.</p>
      </div>
    )
  } else {
    welcome = (
      <div className="content">
        <h1>Welcome to GitQuest!</h1>
        <p>You can search your friends' profile pages with the search bar at the top.</p>

        <div className="grid-x">
          <button onClick={() => window.location.replace("/auth/github")} className="small-4 small-offset-4 cell">Sign In with GitHub</button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid-x">
      <div className="small-full medium-8 medium-offset-2 cell">
        {welcome}
      </div>
    </div>
  )
}

export default Home
