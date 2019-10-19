import React from 'react';

const Controls = props => {
  const icon = props.paused
    ? <i className="fa fa-play-circle fa-2x" aria-hidden="true"></i>
    : <i className="fa fa-pause-circle fa-2x" aria-hidden="true"></i>
  return (
    <div>
      <button onClick={(e) => props.onControlClick(e)} id="start_stop" className="control-button">
        {icon}
      </button>
      <button onClick={(e) => props.onControlClick(e)} id="reset" className="control-button control-button2">
        <i className="fa fa-refresh fa-2x" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Controls;

