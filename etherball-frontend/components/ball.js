import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export default class Ball extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.newKeyframes = this.newKeyframes.bind(this);
    this.shotKeyframes = this.shotKeyframes.bind(this);
  }

  componentDidMount() {
    this.setState({
      x: this.convertXToCourtDepth(
        this.props.player.player.x * 8 + 30,
        this.props.player.player.y
      ),
      y: this.props.player.player.y * 4 + 20,
      previousX: this.convertXToCourtDepth(
        this.props.pastPosition.player.x * 8 + 30,
        this.props.pastPosition.player.y
      ),
      previousY: this.props.pastPosition.player.y * 4 + 20
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      x: this.convertXToCourtDepth(
        nextProps.player.player.x * 8 + 30,
        nextProps.player.player.y
      ),
      y: nextProps.player.player.y * 4 + 20,
      previousX: this.convertXToCourtDepth(
        nextProps.pastPosition.player.x * 8 + 30,
        nextProps.pastPosition.player.y
      ),
      previousY: nextProps.pastPosition.player.y * 4 + 20
    });
  }

  newKeyframes() {
    return keyframes`
      0% {
        top: ${this.state.previousY + window.innerWidth * 0.53 / 2};
        right: ${window.innerWidth / 2 - this.state.previousX};
      }
      100% {
        top: ${this.state.y + window.innerWidth * 0.53 / 2};
        right: ${window.innerWidth / 2 - this.state.x};
        transform: translate(${this.state.x - this.state.previousX}px, ${this
      .state.y - this.state.previousY}px);
      }`;
  }

  shotKeyframes() {
    const sign = this.props.possession === 1 ? 1 : -1;
    return keyframes`
      0% {
        top: ${this.state.previousY + window.innerWidth * 0.53 / 2};
        right: ${window.innerWidth / 2 - this.state.previousX};
      }
      50% {
        transform: translate(${(sign * 70 * 5 - this.state.previousX) /
          2}px, ${-250 - this.state.previousY}px);
      }
      100% {
        top: 40 * 7;
        right: 60 * 6;
        transform: translate(${sign * 71 * 5 - this.state.previousX}px, ${-110 -
      this.state.previousY}px);
      }`;
  }

  convertXToCourtDepth(x, y) {
    const unit = 1 - (-1 * y + 25) / 50 * (170 / 310);

    return unit * x;
  }

  render() {
    const newAnimation = this.props.shot
      ? this.shotKeyframes()
      : this.newKeyframes();
    return (
      <Block
        style={{
          animation: `${newAnimation} 2s ease-in-out`,
          position: "absolute",
          right: window.innerWidth / 2 - this.state.previousX,
          top: this.state.previousY + window.innerWidth * 0.53 / 2
        }}
      >
        <img
          src={
            "https://cdn.rawgit.com/rsimpsonn/038f31eb1e600ca1a1217d976b4812ec/raw/54b47e60a0ff95a9724638c38299769c4535dd03/basketball-sprite.svg"
          }
          style={{ width: 60, height: 60 }}
        />
      </Block>
    );
  }
}

const Block = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
