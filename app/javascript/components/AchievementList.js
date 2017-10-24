import React from 'react'
import BlockItem from './BlockItem'
import AchievementBlock from './AchievementBlock'

const achievements = [
  {id: 0, name: "First Repo!", description: "Create your first repository.", owned: true},
  {id: 1, name: "5 Stars", description: "Get 5 stars on a repository.", owned: true},
  {id: 2, name: "Something", description: "Description here", owned: false},
  {id: 3, name: "Something", description: "Description here", owned: false},
  {id: 4, name: "Something", description: "Description here", owned: false},
  {id: 5, name: "Something", description: "Description here", owned: false},
  {id: 6, name: "Something", description: "Description here", owned: false},
  {id: 7, name: "Something", description: "Description here", owned: false},
  {id: 8, name: "Something", description: "Description here", owned: false},
  {id: 9, name: "Something", description: "Description here", owned: false},
]

// {name: "", description: "", owned: false},

const AchievementList = props => {

  return (
    <div className="grid-x">
      {achievements.map(achievement => {
        return (
          <div className="small-4 cell" key={achievement.id}>
            <AchievementBlock
              name={achievement.name}
              description={achievement.description}
              owned={achievement.owned} />
          </div>
        )
      })}
    </div>
  )
}

export default AchievementList
