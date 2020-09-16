import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';

momentDurationFormatSetup(moment);

const TimeLeft = ({ handleStartStopClick, startStopButtonLabel, timeLeft }) => {
  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
  return (
    <div >
      <button id="start_stop" className="clock-btn" onClick={handleStartStopClick}>
        {startStopButtonLabel}
      </button>

      <p id="time-left" className="clock-control">{formattedTimeLeft}</p>

    </div>
  );
};

export default TimeLeft;