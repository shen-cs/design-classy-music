import React, { Component } from 'react';
import '../css/App.css';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {

  addCircle = () => {
    const x = Math.floor(Math.random() * 600);
    const y = Math.floor(Math.random() * 250);
    const ctx = this.refs.canvas1.getContext('2d');
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke(); 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Deisgn music demo</h1>
        </header>
        <RaisedButton label="start" primary onClick={this.addCircle} style={{margin: 20}}/>
        <div>
          <canvas ref="canvas1" height="300" width="700">
        </canvas>
        </div>
      </div>
    );
  }
}

export default App;
