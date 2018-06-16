import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import './themes.css';
import './App.css';
import Layout from './layout/Layout';
import MarketPage from './marketplace/MarketPage';
import GamePage from './game/GamePage';
import ProfilePage from './profile/ProfilePage';
import CharacterPage from './character/CharacterPage';
import Aux from './hoc/aaux';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Redirect from="/" to="/profile" />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/marketplace" component={MarketPage} />
          <Route path="/game" component={GamePage} />
        </Layout>
        <MarketPage />
        <hr />
        <ProfilePage />
        <hr />
        <GamePage />
        <hr />
        <CharacterPage />
      </Aux>
    );
  }
}

export default App;
