import moment from 'moment';
import React from 'react';

const Break = ({
  breakLength,
  decrementBreakLengthByOneMinute,
  incrementBreakLengthByOneMinute,
}) => {
  const breakLengthInMinutes = moment.duration(breakLength, 's').minutes();
  return (
    <div>
      <p id="break-label" className="title">Break</p>
      <p id="break-length">{breakLengthInMinutes} min</p>
      <button id="break-decrement" className="timer-btn" onClick={decrementBreakLengthByOneMinute}>
        -
      </button>
      <button id="break-increment"  className="timer-btn"onClick={incrementBreakLengthByOneMinute}>
        +
      </button>
    </div>
  );
};

export default Break;