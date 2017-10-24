import React from 'react'
import generateTitle from '../helpers/language_titles'

const defaultProfile = {
  name: "Anonymous",
  login: "???",
  bio: "Nobody knows.",
  avatarUrl: "https://www.beautifulpeople.com/cdn/beautifulpeople/images/default_profile/signup_male.png"
}

const Profile = props => {
  const profile = props.profile ? props.profile : defaultProfile
  let title, titleColor
  if (props.stats) {
    const primaryLanguage = props.stats.sortedKeys[0]
    title = generateTitle(primaryLanguage)
    titleColor = props.stats.languageColors[primaryLanguage]
  }

  return (
    <div className="profile">
      <img className="profile-pic" src={profile.avatarUrl} alt="Profile Picture"></img>
      <h3>{profile.name}</h3>
      <div className="language-title" style={{color: titleColor}}>{title}</div>
      <div>@{profile.login}</div>
      <div className="bio">{profile.bio}</div>
    </div>
  )
}

// <div className="progress-bar-red"><span style={{width: "60%"}}></span></div>

export default Profile
