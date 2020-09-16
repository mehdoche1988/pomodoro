import moment from 'moment';
import React from 'react';

const Session = ({
  sessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute,
}) => {
  const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes();
  return (
    <div>
      <p id="session-label" className="title">Session</p>
      <p id="session-length">{sessionLengthInMinutes} min</p>
      <button id="session-decrement" className="timer-btn" onClick={decrementSessionLengthByOneMinute}>
        -
      </button>
      <button id="session-increment" className="timer-btn" onClick={incrementSessionLengthByOneMinute}>
        +
      </button>
    </div>
  );
};

export default Session;