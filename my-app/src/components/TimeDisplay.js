import React from "react";
import Button from 'react-bootstrap/Button'

class TimeDisplay extends React.Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timeSecond: 0,
      intervalID: 0,
    };
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.refresh = this.refresh.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
  }

  play() {
    let intervalID = setInterval(this.decreaseTimer, 1000);

    this.setState({
      intervalID: intervalID,
    });
  }
  
  stop(){
      clearInterval(this.state.intervalID)
  }

  refresh(){
    this.stop();
    this.props.resetTimer();
    this.setState({
        timeSecond: 0,
        isSession: true
    });
  }


  decreaseTimer() {
    switch (this.state.timeSecond) {
      case 0:
          if(this.props.timeMinute === 0){
              if(this.state.isSession){
                  this.setState({
                      isSession: false
                  });
                  this.props.onToggleInterval(this.state.isSession);
              } else{
                this.setState({
                    isSession: true
                });
                this.props.onToggleInterval(this.state.isSession);
              }
          }else{
            this.props.updateTimerMinute()
            this.setState({
                timeSecond: 59
            })
          }
        break;
      default:
          this.setState(prevState => {
              return{
                  timeSecond: prevState.timeSecond - 1
              }
          })
        break;
    }
  }
  render() {
    return (
      <section className="time-display">
        <section>
          <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
        </section>
        <section className="time-text">
            {this.props.timeMinute}:
            {this.state.timeSecond === 0
              ? "00"
              : this.state.timeSecond < 10
              ? "0" + this.state.timeSecond
              : this.state.timeSecond}
          </section>
        <section className="time-buttons">
          <Button onClick={this.play} variant="outline-dark"> Play </Button>
          <Button onClick={this.stop} variant="outline-dark"> Stop </Button>
          <Button onClick={this.refresh} variant="outline-dark"> Refresh </Button>
        </section>
      </section>
    );
  }
}

export default TimeDisplay;
