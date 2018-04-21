import React, { Component } from 'react';
import '../css/App.css';
import RaisedButton from 'material-ui/RaisedButton';
import Particles from 'react-particles-js';
import '../css/common.css';

class App extends Component {
  
  state = {
    particleNum: 40,
	};

  addCircle = () => {
	  const inc = 20;
	  this.setState({
		  particleNum: this.state.particleNum + inc * 1
		});
  }
  render() {
    return (
      <div className="App col-flex-container">
			  <div style={{width: '100vw'}} className="App-header">
				  <header>
				  	<h1 className="App-title">Deisgn music demo</h1>
				  </header>
          <RaisedButton label="start" primary onClick={this.addCircle} style={{margin: 20}}/>
				</div>
		    <Particles 
              params={{
            		particles: {
								  number: {
                    value: this.state.particleNum,
										density: {
										  enable: false,
										}
									}, 
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#AAA",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
							  flex: 1,
								backgroundColor: '#000'
              }}
							width={'100vw'}
				/>
      </div>
    );
  }
}

export default App;
