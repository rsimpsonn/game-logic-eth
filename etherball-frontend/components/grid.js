import React, { Component } from "react";
import styled from "styled-components";

import Statbox from "./Statbox";

import Player from "./player";
import Ball from "./ball";

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.message,
      pastMessage: this.props.pastMessage,
      width: 0,
      height: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.returnPastPosition = this.returnPastPosition.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerWidth * 0.53,
      windowHeight: window.innerHeight
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      message: nextProps.message
    });
  }

  positionToIndex(position) {
    var index = 0;
    switch (position) {
      case "PG":
        break;
      case "SG":
        index = 1;
        break;
      case "SF":
        index = 2;
        break;
      case "PF":
        index = 3;
        break;
      case "C":
        index = 4;
        break;
    }
    return index;
  }

  returnPastPosition(player) {
    var pastMessage;
    if (this.state.message.possession === this.props.pastMessage.possession) {
      pastMessage = this.props.pastMessage[
        player.player.team === this.state.message.possession
          ? "offense"
          : "defense"
      ][this.positionToIndex(player.player.position)];
    } else {
      pastMessage = this.props.pastMessage[
        player.player.team === this.state.message.possession
          ? "defense"
          : "offense"
      ][this.positionToIndex(player.player.position)];
    }

    console.log(player.player.name, pastMessage.player.name);
    return pastMessage;
  }

  render() {
    var homeTeam = [];
    var awayTeam = [];
    if (this.state.message) {
      if (this.state.message.possession === 1) {
        homeTeam = this.state.message.offense;
        awayTeam = this.state.message.defense;
      } else {
        awayTeam = this.state.message.offense;
        homeTeam = this.state.message.defense;
      }
    }

    var players = homeTeam.concat(awayTeam);

    return (
      <Column>
        <Header>{this.state.message.message}</Header>
        <Column style={{ paddingBottom: -10 }}>
          <img
            src="https://cdn.rawgit.com/rsimpsonn/6a1f5f9d961adfef1d46a6c2345da7e7/raw/e699b086d3e83309d3d174919f7dce28fc4168bc/court-layout.svg"
            style={{ width: 980, height: "auto", margin: "auto" }}
          />
          {players
            .sort((a, b) => {
              return a.player.y - b.player.y;
            })
            .map((player, index) => {
              if (player.player.name === "Goofy") {
                console.log(player.player.team, this.state.message.possession);
              }
              return (
                <Player
                  player={player}
                  pastPosition={this.returnPastPosition(player)}
                  species={player.player.species}
                />
              );
            })}
          {this.state.message &&
            <Ball
              offense
              player={this.state.message.ballCarrier}
              pastPosition={this.props.pastMessage.ballCarrier}
              shot={this.state.message.message.includes("shot")}
              possession={this.state.message.possession}
            />}
        </Column>
        <Header>
          Q{this.state.message.quarter}{" "}
          {Math.floor(this.state.message.time / 60)}:{Math.round(
            this.state.message.time % 60
          ) < 10
            ? "0"
            : ""}
          {Math.round(this.state.message.time % 60)}
        </Header>
        <Row>
          <Column>
            {homeTeam.map(player =>
              <Statbox player={player} species={"bear"} />
            )}
          </Column>
          <Column>
            {awayTeam.map(player =>
              <Statbox player={player} species={"bunny"} />
            )}
          </Column>
        </Row>
      </Column>
    );
  }
}

const Court = styled.div`
  width: 100%;
  height: 350px;
  background-image: url(https://cdn.rawgit.com/rsimpsonn/6a1f5f9d961adfef1d46a6c2345da7e7/raw/670ef000a3d7a1b749d008dd8b31b0841b2b1468/court-layout.svg);
  background-repeat: no-repeat;
  background-size: 960px auto;
  background-position: center;
  position: relative;
`;

const Header = styled.p`
  font-family: Avenir-Medium;
  letter-spacing: 0.5px;
  color: #212121;
  font-size: 14px;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
