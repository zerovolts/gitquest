import React from "react"

import Overview from "./overview"
import BlockItem from "./block-item"
import RepositoryList from "./repository-list"
import QuestLog from "./quest-log"
import AchievementList from "./achievement-list"

import store from "../models/store"

const ContentArea = props => {
  switch (props.currentTab) {
    case "Overview":
      return props.repos
        ? <Overview repos={props.repos} stats={props.stats} />
        : <BlockItem name="Overview" body="" />
    case "Repositories":
      return <RepositoryList repos={props.repos} />
    case "Quest Log":
      return <QuestLog />
    case "Achievements":
      return <AchievementList login={props.login} store={store} />
  }
}

export default ContentArea
