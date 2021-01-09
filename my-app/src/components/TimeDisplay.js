import React from "react";

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
      <section>
        <section>
          <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
          <span>
            {this.props.timeMinute}:
            {this.state.timeSecond === 0
              ? "00"
              : this.state.timeSecond < 10
              ? "0" + this.state.timeSecond
              : this.state.timeSecond}
          </span>
        </section>
        <section className="time-buttons">
          <button onClick={this.play}> Play </button>
          <button onClick={this.stop}> Stop </button>
          <button onClick={this.refresh}> Refresh </button>
        </section>
      </section>
    );
  }
}

export default TimeDisplay;
