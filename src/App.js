import React, { Component } from 'react';
import './App.css';
import Controls from './components/Controls';
import Timer from './components/Timer';
import ControlMinutes from './components/ControlMinutes';
import { connect } from 'react-redux';
import * as actionCreator from './actions/actionCreators';
import ReactCountdownClock from 'react-countdown-clock'


class App extends Component {

  handleIncrementClick = (e) => {
    const type = e.currentTarget.id.split("-")
    const [timerType] = type; //break or session
    // eslint-disable-next-line
    const inc = timerType === "session"
      ? this.props.increment("session")
      : this.props.increment("break")
  }

  handleDecrementClick = (e) => {
    const type = e.currentTarget.id.split("-")
    const [timerType] = type; //break or session
    // eslint-disable-next-line
    const inc = timerType === "session"
      ? this.props.decrement("session")
      : this.props.decrement("break")
  }

  handleControlClick = (e) => {
    if (e.currentTarget.id === "start_stop") {
      this.props.startStop()
      if (this.props.state.sessionType === "session") {
        this.props.state.sessionTimerRunning
          ? this.pauseTimer()
          : this.startTimer("session");
      } else {
        this.props.state.sessionTimerRunning
          ? this.pauseTimer()
          : this.startTimer("break");
      }
    } else if (e.currentTarget.id === "reset") {
      this.resetTimer();
    }
  }

  resetTimer = () => {
    clearInterval(this.props.state.intervalId)
    this.beepSound.pause()
    this.beepSound.currentTime = 0;
    this.props.reset()
  }

  runTimer = (timerType) => {
    let sType = timerType === "session" ? "session" : "break"
    if (timerType === "session") {
      this.props.run(sType)
      if (this.props.state.session < 0) {
        clearInterval(this.props.state.intervalId);
        this.props.pause(sType)
        this.beepSound.play()
        this.startTimer("break")
      }
    } else if (timerType === "break") {
      this.props.run(sType)
      if (this.props.state.break < 0) {
        clearInterval(this.props.state.intervalId);
        this.props.pause(sType)
        this.beepSound.play()
        this.startTimer("session")
      }
    }
  }

  startTimer = (t) => {
    let intervalId = setInterval(() => {
      this.props.countdown(t)
      this.runTimer(t)
    }, 1000)
    this.props.setIntervalID(intervalId)
  }

  pauseTimer = () => {
    this.props.pSettings();
    clearInterval(this.props.state.intervalId)
  }

  render() {
    return (
      <div id="wrapper">
        <section className="container-social">
          <div className="text-right">
            <ul className="social-list">
              <li>
                <a href="https://www.linkedin.com/in/sonyacooley/" title="linkedin" target="blank"><i
                  className="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a href="https://github.com/Sonnerz" title="github" target="blank"><i className="fa fa-github-square"></i></a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org/sonnerz" title="free code camp" target="blank"><i
                  className="fa fa-free-code-camp"></i></a>
              </li>
              <li>
                <a href="https://sonnerz.github.io" title="portfolio" target="blank"><i className="fa fa-briefcase"></i></a>
              </li>
              <li>
                <a className="nav-link text-light" rel="noopener noreferrer" href="mailto:sonya.cooley@mail.com" target="_blank" title="email me"><i
                  className="fa fa-envelope-square"></i></a>
              </li>
            </ul>
          </div>
        </section>
        <h1>Pomodoro Clock</h1>
        <div id="app-container">

          <div id="timer-component">

            <ReactCountdownClock
              color="#012705"
              seconds={this.props.state.sessionType === "session"
                ? this.props.state.userSetSession : this.props.state.userSetBreak}
              paused={this.props.state.timerPaused}
              showMilliseconds={false}
              fontSize={"0px"}
              alpha={0.6}
              size={300}
              weight={10}
            />

            <div id="timer-clock">
              <Timer
                userSession={this.props.state.session}
                userBreak={this.props.state.break}
                sessionType={this.props.state.sessionType}
              />
            </div>
            <div id="timer-label">
              {this.props.state.sessionType === "session" ? "Session" : "Break"}
            </div>

          </div>

          <div className="length-controls">
            <div id="session-component">
              <ControlMinutes
                onIncrement={this.handleIncrementClick}
                onDecrement={this.handleDecrementClick}
                session={this.props.state.userSetSession}
                type={"session"}
                sessionRunning={this.props.state.sessionTimerRunning}
                sessionType={this.props.state.sessionType} />
            </div>
            <div id="break-component">
              <ControlMinutes
                onIncrement={this.handleIncrementClick}
                onDecrement={this.handleDecrementClick}
                session={this.props.state.userSetBreak}
                type={"break"}
                sessionRunning={this.props.state.sessionTimerRunning}
                sessionType={this.props.state.sessionType} />
            </div>

          </div>

          <div id="controls-component">
            <Controls
              onControlClick={this.handleControlClick}
              paused={this.props.state.timerPaused}
              sessionType={this.props.state.sessionType} />
          </div>
          <div id="tomato"></div>
          <audio id="beep" preload="auto"
            src="https://goo.gl/65cBl1"
            ref={(audio) => { this.beepSound = audio; }} />

        </div>
      </div >
    );
  }
}

//REACT-REDUX///////////////////////////////////////////

let mapStateToProps = (state) => { return { state } };

let mapDispatchToProps = (dispatch) => {
  return {
    increment: (timerType) => dispatch(actionCreator.increment(timerType)),
    decrement: (timerType) => dispatch(actionCreator.decrement(timerType)),
    reset: () => dispatch(actionCreator.reset()),
    startStop: () => dispatch(actionCreator.start_stop()),
    countdown: (timerType) => dispatch(actionCreator.countdown(timerType)),
    setIntervalID: (id) => dispatch(actionCreator.setIntervalID(id)),
    run: (timerType) => dispatch(actionCreator.runTimer(timerType)),
    pause: (timerType) => dispatch(actionCreator.pauseTimer(timerType)),
    pSettings: () => dispatch(actionCreator.pauseSettings())

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
