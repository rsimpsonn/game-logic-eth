import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const Statbox = props => {
  const player = props.player;
  return (
    <Box>
      <Row>
        <Player src={props.source} />
        <Column>
          <Row>
            <Paragraph>{player.player.name}</Paragraph>
            <Paragraph style={{ color: "#DCDCDC", marginLeft: 15 }}>
              {player.player.position}
            </Paragraph>
          </Row>
          <Row>
            <Numb>
              {player.player.points}
              <span
                style={{
                  fontFamily: "Avenir-Medium",
                  fontSize: "10px",
                  marginLeft: 2
                }}
              >
                PTS
              </span>
            </Numb>
            <Numb>
              {player.player.rebounds}
              <span
                style={{
                  fontFamily: "Avenir-Medium",
                  fontSize: "10px",
                  marginLeft: 2
                }}
              >
                {"REB"}
              </span>
            </Numb>
            <Numb>
              {player.player.assists}
              <span
                style={{
                  fontFamily: "Avenir-Medium",
                  fontSize: "10px",
                  marginLeft: 2
                }}
              >
                {"AST"}
              </span>
            </Numb>
            <Numb>
              {player.player.makes}/{player.player.shots}
              <span
                style={{
                  fontFamily: "Avenir-Medium",
                  fontSize: "10px",
                  marginLeft: 2
                }}
              >
                {"FG"}
              </span>
            </Numb>
          </Row>
        </Column>
      </Row>
    </Box>
  );
};

const Box = styled.div`
  background-color: #F9F9F9;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 300px;
  margin-right: 40px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p`
  font-family: Avenir-Medium;
  letter-spacing: 0.5px;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #212121;
`;

const Numb = styled.p`
  font-family: Avenir-Heavy;
  font-size: 16px;
  margin: 0;
  margin-right: 5px;
  color: #212121;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Player = styled.img`
  border-radius: 8px;
  height: 60px;
  width: 60px;
  margin-right: 10px;
`;

export default Statbox;
