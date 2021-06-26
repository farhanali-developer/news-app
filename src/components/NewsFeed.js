import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LatestNews from "./LatestNews";
import Login from "./login";
import Signup from "./signup";
import RecommendedNews from "./RecommendedNews";
import SingleNews from "./SingleNews";
class NewsFeed extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/allnews">
            <LatestNews />
            {/* <RecommendedNews /> */}
          </Route>
          <Route path="/recommended">
            <RecommendedNews />
          </Route>
          <Route path="/news">
            <SingleNews />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default NewsFeed;
