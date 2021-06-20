import React, { Component } from 'react'
import RecommendedNews from './RecommendedNews'
import Navbar from './Navbar'
import LatestNews from './LatestNews'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class NewsFeed extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route path='/login'></Route>
          <Route path='/signup'></Route>
          <Route path='/'>
            <LatestNews />
            <RecommendedNews />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default NewsFeed
