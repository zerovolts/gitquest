import React from "react"
import {observer, inject} from "mobx-react"

const HomePage = inject("store")(observer((props) => {
  const currentUser = store.auth.currentUser

  let welcome = null
  if (currentUser) {
    welcome = (
      <div className="content">
        <h1>Welcome, {currentUser.name.split(" ")[0]}!</h1>
        <p>You can search your friends' profile pages with the search bar at the top.</p>
        <p>Find some quests to complete to gain experience!</p>
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
}))

export default HomePage
