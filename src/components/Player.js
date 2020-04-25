import React, { Component } from 'react';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

class Player extends Component {
  state = {
    playerOneScore: 0,
    playerTwoScore: 0,
    winningScore: 5,
    gameOver: false,
  };
  handlePlayerOne = () => {
    this.setState({
      playerOneScore: (this.state.playerOneScore =
        Math.floor(Math.random() * 5) + 1),
      gameOver: this.state.playerOneScore === 5 ? true : false,
    });
  };
  handlePlayerTwo = () => {
    this.setState({
      playerTwoScore: (this.state.playerTwoScore =
        Math.floor(Math.random() * 5) + 1),
      gameOver: this.state.playerTwoScore === 5 ? true : false,
    });
  };

  reset = () => {
    this.setState({
      playerOneScore: 0,
      playerTwoScore: 0,
      gameOver: false,
    });
  };
  render() {
    return (
      <div className='container'>
        <h2>Player VS Player</h2>
        <div className='playerSection'>
          <PlayerOne handlePlyOne={this.handlePlayerOne} score={this.state} />
        </div>
        <div className='playerSection'>
          <PlayerTwo handlePlyTwo={this.handlePlayerTwo} score={this.state} />
        </div>
        <p className='winning'>Winning Score {this.state.winningScore}</p>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Player;
