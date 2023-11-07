import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    // Update the time every second
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className='main'>
      <div className='sub'>
           <h1>Time</h1>
            <p>{this.state.time}</p>
            </div>   
      </div>
    );
  }
}

export default App;
