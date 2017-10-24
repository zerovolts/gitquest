import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import UserPage from './UserPage'
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <NavBar fetchData={this.fetchData} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:login" component={UserPage} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
