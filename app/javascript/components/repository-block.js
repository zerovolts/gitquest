import React from "react"

const RepositoryBlock = props => {
  let primaryLanguage = null
  let primaryColor = "white"

  if (props.repo.primaryLanguage) {
    primaryColor = props.repo.primaryLanguage.color
    primaryLanguage = (
      <div className="programming-language" style={{color: primaryColor}}>
        {props.repo.primaryLanguage ? props.repo.primaryLanguage.name : ""}
      </div>
    )
  }

  return (
    <div className="content-card" style={{borderTop: "0.3em solid " + primaryColor}}>
      <div className="repo-name">{props.repo.name}</div>
      <hr />
      <div className="repo-description">{props.repo.description}</div>
      {primaryLanguage}
      <div className="repo-value">{/*Math.floor(Math.random() * 100)*/}</div>
    </div>
  )
}

export default RepositoryBlock
