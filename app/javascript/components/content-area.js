import React from "react"

import Overview from "./overview"
import BlockItem from "./block-item"
import RepositoryList from "./repository-list"
import AchievementList from "./achievement-list"

const ContentArea = props => {
  switch (props.currentTab) {
    case "Overview":
      return props.repos
        ? <Overview repos={props.repos} stats={props.stats} />
        : <BlockItem name="Overview" body="" />
    case "Repositories":
      return <RepositoryList repos={props.repos} />
    case "Network":
      return <BlockItem name="" body="" />
    case "Achievements":
      return <AchievementList login={props.login} />
  }
}

export default ContentArea
