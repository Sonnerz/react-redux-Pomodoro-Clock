import * as actionType from '../actions/actionTypes';


const initialState = {
  break: 300,
  userSetBreak: 300,
  session: 1500,
  userSetSession: 1500,
  sessionTimerRunning: false,
  timerPaused: true,
  intervalId: "",
  sessionType: "session"
};

/*  reducer called messageReducer() that handles the state for the messages.*/
const clockReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      if (action.timerType === "session") {
        return {
          ...state,
          session: state.session === 3600 ? state.session : state.userSetSession + 60,
          userSetSession: state.userSetSession === 3600 ? state.userSetSession : state.userSetSession + 60
        }
      } else {
        return {
          ...state,
          break: state.break === 3600 ? state.break : state.userSetBreak + 60,
          userSetBreak: state.userSetBreak === 3600 ? state.userSetBreak : state.userSetBreak + 60
        }
      }
    case actionType.DECREMENT:
      if (action.timerType === "session") {
        return {
          ...state,
          session: state.session === 60 ? state.session : state.userSetSession - 60,
          userSetSession: state.userSetSession === 60 ? state.userSetSession : state.userSetSession - 60
        }
      } else {
        return {
          ...state,
          break: state.break === 60 ? state.break : state.userSetBreak - 60,
          userSetBreak: state.userSetBreak === 60 ? state.userSetBreak : state.userSetBreak - 60
        }
      }
    case actionType.RESET:
      return {
        ...initialState
      }
    case actionType.SET_INTERVAL_ID:
      return {
        ...state,
        intervalId: action.intervalId
      }
    case actionType.PAUSE_SETTINGS:
      return {
        ...state,
        sessionTimerRunning: false,
        timerPaused: true
      }
    case actionType.START_STOP:
      return {
        ...state,
        sessionTimerRunning: !state.sessionTimerRunning,
        timerPaused: !state.timerPaused
      }
    case actionType.COUNTDOWN:
      if (action.timerType === "session") {
        return {
          ...state,
          session: state.session - 1
        }
      } else {
        return {
          ...state,
          break: state.break - 1
        }
      }
    case actionType.RUN_TIMER:
      if (action.timerType === "session") {
        return {
          ...state,
          sessionType: action.timerType,
          sessionTimerRunning: true,
          timerPaused: false,
          break: state.userSetBreak
        }
      } else {
        return {
          ...state,
          sessionType: action.timerType,
          sessionTimerRunning: true,
          timerPaused: false,
          session: state.userSetSession
        }
      }
    case actionType.PAUSE_TIMER:
      if (action.timerType === "session") {
        return {
          ...state,
          session: state.userSetSession,
          intervalId: "",
          sessionTimerRunning: false,
          timerPaused: true,
          sessionType: "break"
        }
      } else {
        return {
          ...state,
          break: state.userSetBreak,
          intervalId: "",
          sessionTimerRunning: false,
          timerPaused: true,
          sessionType: "session"
        }
      }
    default:
      return state;
  }
};




export default clockReducer;





