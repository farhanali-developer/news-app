import React, { Component } from "react";
import RecommendedNews from "./RecommendedNews";
import Navbar from "./Navbar";
import LatestNews from "./LatestNews";

class NewsFeed extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2 style={{ marginTop: "50px", marginLeft: "35px" }}>Latest NEWS</h2>
        <LatestNews />
        <h2 style={{ marginTop: "50px", marginLeft: "35px" }}>
          Recommended NEWS
        </h2>
        <RecommendedNews />
      </div>
    );
  }
}

export default NewsFeed;
