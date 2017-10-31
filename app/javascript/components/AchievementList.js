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

const blankAvailable = Array(9).fill(0).map((_, i) => { return {
  id: i,
  name: "",
  description: "",
  owned: false
}})

const blankAchievements = {
  owned: [],
  available: blankAvailable
}

class AchievementList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      achievements: blankAchievements
    }

    this.loadAchievements = this.loadAchievements.bind(this)
  }

  loadAchievements() {
    fetch(`/api/v1/users/${this.props.login}/achievements`, {credentials: "same-origin"})
      .then(res => res.json())
      .then(data => {
        this.setState({
          achievements: data
        })
      })
  }

  componentDidMount() {
    this.loadAchievements()
  }

  render() {
    const ownedAchievements = this.state.achievements.owned.map(achievement =>
      <div className="small-4 cell" key={achievement.id}>
        <AchievementBlock
          name={achievement.name}
          description={achievement.description}
          owned={true} />
      </div>
    )

    const availableAchievements = this.state.achievements.available.map(achievement =>
      <div className="small-4 cell" key={achievement.id}>
        <AchievementBlock
          name={achievement.name}
          description={achievement.description}
          owned={false} />
      </div>
    )

    const achievements = ownedAchievements.concat(availableAchievements)

    return (
      <div className="grid-x">
        {achievements}
      </div>
    )
  }
}

// const AchievementList = props => {
//
//   return (
//     <div className="grid-x">
//       {achievements.map(achievement => {
//         return (
//           <div className="small-4 cell" key={achievement.id}>
//             <AchievementBlock
//               name={achievement.name}
//               description={achievement.description}
//               owned={achievement.owned} />
//           </div>
//         )
//       })}
//     </div>
//   )
// }

export default AchievementList
