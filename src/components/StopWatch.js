import React, { Component } from 'react';

class StopWatch extends Component {
    state ={
        isRunning: false,
        elapsedTime: 0,
        prevTime: 0,
    };

    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning:  !prevState.isRunning,

        }));

        if(!this.state.isRunning){
            this.setState({prevTime: Date.now() });
        }
    };

    handleReset = () => {
        this.setState(  {
            elapsedTime: 0,
        })
    };

    componentDidMount() {
       this.intervalID = setInterval(()=> this.tick(), 100)
    }

    componentWillUnmout() {
        clearImmediate(this.intervalID)
    }

    tick = () => {
        if(this.state.isRunning){
            const now = Date.now();
            this.setState(  prevState=> ({
                prevTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.prevTime)
            }))
        }
    };

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{Math.floor(this.state.elapsedTime / 1000)}</span>
                <button onClick={this.handleStopwatch}>
                    { this.state.isRunning ? "Stop" :"Start" }
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default  StopWatch;