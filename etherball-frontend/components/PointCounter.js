import React, { Component } from "react";
import styled from "styled-components";

const PointCounter = props => {
  return (
    <Row>
      <Center>
        <Header>HOME</Header>
        <Points>{props.homePoints}</Points>
      </Center>
      <Center>
        <Header>AWAY</Header>
        <Points>{props.awayPoints}</Points>
      </Center>
    </Row>
  );
};

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = styled.p`
  letter-spacing: 1px;
  font-family: Avenir-Heavy;
  font-size: 14px;
  color: #212121;
`;

const Points = styled.p`
  font-family: Avenir-MediumOblique;
  font-size: 30px;
  color: #212121;
  margin: 0;
`;

export default PointCounter;
