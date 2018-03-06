// @format
import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    userName: "hisco-"
  };

  eventHandler = event => {
    console.log("ok");
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput value={this.state.userName} eHandler={this.eventHandler} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
