import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import Home from './components/Home'

import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </>
    )
  }
}

export default App
