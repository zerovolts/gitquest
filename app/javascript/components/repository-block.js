import React from "react"

const linkRepo = repo => {
  fetch(`/api/v1/repos/${repo.name}/link.json`, {
    credentials: "same-origin",
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(repo)
  }).then(res => res.json())
    .then(data => {
      console.log("Linked Repository: ", data)
    })
}

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

  const linkButton = props.repo.linked
    ? <button className="link-button linked" onClick={() => linkRepo(props.repo)}>Unlink</button>
    : <button className="link-button unlinked" onClick={() => linkRepo(props.repo)}>Link</button>

  return (
    <div className="content-card" style={{borderTop: "0.3em solid " + primaryColor}}>
      <div className="repo-name">{props.repo.name}</div>
      <hr />
      <div className="repo-description">{props.repo.description}</div>
      {primaryLanguage}
      <div className="repo-value">{/*Math.floor(Math.random() * 100)*/}</div>
      {linkButton}
    </div>
  )
}

export default RepositoryBlock
