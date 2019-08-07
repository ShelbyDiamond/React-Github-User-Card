import React from "react";
import "./App.css";
import CardHolder from "./components/card";
import FollowerHolder from "./components/Followers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myInfo: [],
      followerInfo: []
    };
  }

  componentDidMount() {
    this.fetchCard();
    this.fetchFollowers();
  }

  fetchCard = () => {
    fetch(`https://api.github.com/users/ShelbyDiamond`)
      .then(response => {
        return response.json();
      })

      .then(response => {
        console.log(response);
        this.setState({
          myInfo: response
        });
      })

      .catch(error => {
        console.log("Error Mr. Robinson! Error", error);
      });
  };

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/ShelbyDiamond/followers`)
      .then(response => {
        return response.json();
      })

      .then(response => {
        console.log(response);
        this.setState({
          followerInfo: response
        });
      })

      .catch(error => {
        console.log("Error Mr. Robinson! Error", error);
      });
  };

  render() {
    return (
      <div>
        <h2>Princess Shelby's Github</h2>
        <CardHolder data={this.state.myInfo} />
        {this.state.followerInfo.map(follower => (
          <FollowerHolder data={follower} />
        ))}
      </div>
    );
  }
}

export default App;
