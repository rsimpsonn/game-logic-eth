import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import characterAnimations from "./playerAnimations/index";

const RIGHT = 0;
const FORWARD = 1;
const LEFT = 2;
const BACK = 3;

export default class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: RIGHT,
      loopIndex: 0
    };

    console.log(this.props.species);

    this.sprites = characterAnimations[this.props.species];

    // this.newKeyframes = this.newKeyframes.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        index: this.state.index + 1 === this.sprites[RIGHT].length
          ? 0
          : this.state.index + 1
      });
    }, 180);
    this.setState({
      x: this.convertXToCourtDepth(
        this.props.player.player.x * 8 + 30,
        this.props.player.player.y
      ),
      y: this.props.player.player.y * 4 + 20,
      previousX: this.convertXToCourtDepth(
        this.props.pastPosition.player.x * 8 + 30,
        this.props.player.player.y
      ),
      previousY: this.props.pastPosition.player.y * 4 + 20
    });
  }

  componentWillReceiveProps(nextProps) {
    this.sprites = characterAnimations[nextProps.species];
    var yDiff = Math.abs(
      nextProps.player.player.y - nextProps.pastPosition.player.y
    );
    var xDiff = Math.abs(
      nextProps.player.player.x - nextProps.pastPosition.player.x
    );
    var xDirection = nextProps.player.player.x > nextProps.pastPosition.player.x
      ? RIGHT
      : LEFT;
    var yDirection = nextProps.player.player.y > nextProps.pastPosition.player.y
      ? FORWARD
      : BACK;

    if (xDiff === yDiff) {
      const rightSideOfCourt = nextProps.player.player.x > 0;
      const upperSideOfCourt = nextProps.player.player.y > 0;

      if (Math.abs(nextProps.player.player.y) > 15) {
        yDiff = 1000;
        yDirection = upperSideOfCourt ? BACK : FORWARD;
      } else {
        xDiff = 1000;
        xDirection = rightSideOfCourt ? RIGHT : LEFT;
      }
    }

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
      previousY: nextProps.pastPosition.player.y * 4 + 20,
      direction: yDiff > xDiff ? yDirection : xDirection,
      loopStarted: true
    });
  }

  convertXToCourtDepth(x, y) {
    const unit = 1 - (-1 * y + 25) / 50 * (170 / 310);

    return unit * x;
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

  render() {
    var newAnimation;
    if (
      this.state.x !== this.state.previousX ||
      this.state.y !== this.state.previousY
    ) {
      newAnimation = this.newKeyframes();
    }
    // if (this.state.loopStarted) {
    //   this.looper = setInterval(() => {
    //     this.setState({
    //       index: this.state.index + 1 === Right.length
    //         ? 0
    //         : this.state.index + 1
    //     });
    //   }, 200);
    //
    //   this.setState({
    //     loopStarted: false
    //   });
    // }
    //
    // if (this.state.index === 10) {
    //   clearInterval(this.looper);
    //
    //   const side = Math.abs(this.state.x) > 40;
    //   var direction;
    //   if (side) {
    //     if (
    //       Math.abs(this.state.x) >
    //       Math.abs(this.props.ballCarrier.player.x + 10)
    //     ) {
    //       direction = this.state.x > 0 ? LEFT : RIGHT;
    //     } else {
    //       direction = this.state.x > 0 ? RIGHT : LEFT;
    //     }
    //   } else {
    //     if (y > 0) {
    //       direction = FORWARD;
    //     } else {
    //       direction = BACK;
    //     }
    //   }
    //
    //   this.setState({
    //     direction
    //   });
    // }

    return (
      <Block
        style={{
          animation: `${newAnimation} 2s ease-in-out`,
          position: "absolute",
          right: window.innerWidth / 2 - this.state.previousX,
          top: this.state.previousY + window.innerWidth * 0.53 / 2
        }}
      >
        {this.sprites[this.state.direction][this.state.index]}
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
