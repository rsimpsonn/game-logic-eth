import React, { Component } from "react";
import openSocket from "socket.io-client";
import styled from "styled-components";

import Grid from "../components/grid";
import Statbox from "../components/Statbox";
import PointCounter from "../components/PointCounter";

export default class GamePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      team1Points: 0,
      team2Points: 0,
      index: 0
    };
  }

  componentDidMount() {
    const socket = openSocket("http://localhost:3000");
    socket.emit("newGame", err => console.log(err));
    socket.on("gameMessage", (message, err) => {
      console.log(message);
      this.setState({
        message: message,
        [`team${message.team}Points`]:
          this.state[`team${message.team}Points`] + message.add,
        messages: this.state.messages.concat(message)
      });
    });
  }

  render() {
    var index = this.state.messages.indexOf(this.state.message);
    if (index === -1) {
      index = 0;
    }
    if (index === 5) {
      console.log(this.state.message);
    }

    var homeTeam = [];
    var awayTeam = [];

    return (
      <div>
        <PointCounter
          homePoints={this.state.team1Points}
          awayPoints={this.state.team2Points}
        />
        {this.state.message &&
          <Grid
            message={this.state.message}
            pastMessage={this.state.messages[index === 0 ? 0 : index - 1]}
          />}
      </div>
    );
  }
}
