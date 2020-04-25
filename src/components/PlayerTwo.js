import React from 'react';

const PlayerTwo = (props) => {
  const generateNum = () => {
    props.handlePlyTwo();
  };
  return (
    <React.Fragment>
      <p>{props.score.playerTwoScore}</p>
      <br />
      <button onClick={generateNum} disabled={props.score.gameOver}>
        Player 2
      </button>
      {props.score.playerTwoScore === 5 && (
        <h5>Game Over - ...Player Two Win...</h5>
      )}
    </React.Fragment>
  );
};

export default PlayerTwo;
