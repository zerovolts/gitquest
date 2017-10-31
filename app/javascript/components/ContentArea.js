import React from 'react'

import Overview from './Overview'
import BlockItem from './BlockItem'
import RepositoryList from './RepositoryList'
import AchievementList from './AchievementList'

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
