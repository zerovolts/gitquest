import React from "react"

import generateTitle from "../helpers/language-titles"

const defaultProfile = {
  name: "Anonymous",
  login: "???",
  bio: "Nobody knows.",
  avatarUrl: "https://www.beautifulpeople.com/cdn/beautifulpeople/images/default_profile/signup_male.png"
}

const Profile = props => {
  const profile = props.profile ? props.profile : defaultProfile
  const user = props.user

  let title, titleColor
  if (props.stats) {
    const primaryLanguage = props.stats.sortedKeys[0]
    title = generateTitle(primaryLanguage)
    titleColor = props.stats.languageColors[primaryLanguage]
  }

  return (
    <div className="profile">
      <h3 className="profile-level">{profile.name || profile.login}</h3>
      <img className="profile-pic" src={profile.avatarUrl} alt="Profile Picture"></img>
      {user ? <div className="progress-bar-red"><span style={{width: user.experience_data.completion_percent + "%"}}></span></div> : null}
      <div className="profile-level">Level {user ? props.user.level : 0}</div>
      <div className="language-title" style={{color: titleColor}}>{title}</div>
      <div className="bio">{profile.bio}</div>
    </div>
  )
}

// <div className="progress-bar-red"><span style={{width: "60%"}}></span></div>

export default Profile
