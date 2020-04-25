import React from 'react';

const LuckyNum = (props) => {
  const getLuckyNum = () => {
    props.getRandom();
  };
  return (
    <React.Fragment>
      {props.luckyNum && <p>Your Lucky Number is {props.luckyNum}</p>}
      <button onClick={getLuckyNum}>Pick Number</button>
    </React.Fragment>
  );
};

export default LuckyNum;
