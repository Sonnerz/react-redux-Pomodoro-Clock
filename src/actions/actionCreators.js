import * as actionType from './actionTypes';


/* ACTION CREATOR */
export const setIntervalID = (intervalId) => {
  return {
    type: actionType.SET_INTERVAL_ID,
    intervalId: intervalId
  };
};


export const increment = (timerType) => {
  return {
    type: actionType.INCREMENT,
    timerType: timerType
  };
};


export const decrement = (timerType) => {
  return {
    type: actionType.DECREMENT,
    timerType: timerType
  };
};


export const reset = () => {
  return {
    type: actionType.RESET
  };
};

export const start_stop = () => {
  return {
    type: actionType.START_STOP
  };
};


export const countdown = (timerType) => {
  return {
    type: actionType.COUNTDOWN,
    timerType: timerType
  };
};


export const runTimer = (timerType) => {
  return {
    type: actionType.RUN_TIMER,
    timerType: timerType
  };
};

export const pauseTimer = (timerType) => {
  return {
    type: actionType.PAUSE_TIMER,
    timerType: timerType
  };
};


export const pauseSettings = () => {
  return {
    type: actionType.PAUSE_SETTINGS
  };
};