import React from "react"

import BlockItem from "./block-item"
import RepositoryBlock from "./repository-block"

const RepositoryList = props => {
  if (props.repos) {
    const repos = props.repos.slice().reverse()
    return (
      <div className="grid-x">
        {repos.map(repo => {
          return (
            <div className="small-4 cell" key={repo.id}>
              <RepositoryBlock repo={repo} />
            </div>
          )
        })}
      </div>
    )
  } else {
    return <BlockItem name="" body="Sorry, this user has no repositories." />
  }
}

export default RepositoryList
