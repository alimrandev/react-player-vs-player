import React from 'react';

const PlayerOne = (props) => {
  const generateNum = () => {
    props.handlePlyOne();
  };
  return (
    <React.Fragment>
      <p>{props.score.playerOneScore}</p>
      <br />
      <button onClick={generateNum} disabled={props.score.gameOver}>
        Player 1
      </button>
      {props.score.playerOneScore === 5 && (
        <h5>Game Over - ...Player one Win...</h5>
      )}
    </React.Fragment>
  );
};

export default PlayerOne;
