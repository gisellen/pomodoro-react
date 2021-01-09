import React from "react";
import "../App.css";
import Break from "./Break";
import Session from "./Session";
import TimeDisplay from "./TimeDisplay";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakTime: 5,
      sessionTime: 25,
      timeMinute: 25,
      isPlay: false,
    };
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);

    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);

    this.onToggleInterval = this.onToggleInterval.bind(this)
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this)
    this.onResetTimer = this.onResetTimer.bind(this)
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakTime: prevState.breakTime + 1,
      };
    });
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakTime: prevState.breakTime - 1,
      };
    });
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionTime: prevState.sessionTime + 1,
        timeMinute: prevState.sessionTime + 1,
      };
    });
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionTime: prevState.sessionTime - 1,
        timeMinute: prevState.sessionTime - 1,
      };
    });
  }

  onUpdateTimerMinute(){
    this.setState((prevState) => {
      return{
        timeMinute: prevState.timeMinute - 1
      }
    })
  }

  onToggleInterval(isSession){
    if(isSession){
      this.setState({
       timeMinute: this.state.sessionTime
      })
    } else{
      this.setState({
        timeMinute: this.state.breakTime
      })
    }

  }

  onResetTimer(){
    this.setState({
        timeMinute: this.state.sessionTime
    })
}

  render() {
    return (
      <main>
        <h1>Pomodoro Clock</h1>
        <section className="time-container">
          <Break
            breakInterval={this.state.breakTime}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
            isPlay={this.isPlay}
          />
          <Session
            sessionInterval={this.state.sessionTime}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
            isPlay={this.isPlay}
          />
        </section>
        <TimeDisplay
          timeMinute={this.state.timeMinute}
          breakTime={this.breakInterval}
          updateTimerMinute={this.onUpdateTimerMinute}
          onToggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer}
        />
      </main>
    );
  }
}

export default App;
