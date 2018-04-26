import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HomeIcon from 'material-ui/svg-icons/action/home';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ViewIcon from 'material-ui/svg-icons/action/visibility';
import IconButton from 'material-ui/IconButton';
import '../css/App.css';
import '../css/common.css';


class Header extends Component { 
  
  navigate = (path) => () => {
    this.props.history.push(path);
  }

  deleteAll = () => {
    fetch('http://localhost:5000/api/data', {
      headers: new Headers({
				'Content-Type': 'application/json'
			}),
      mode: 'cors',
      method: 'DELETE',
      body: JSON.stringify({del: true})
    })
    .then(res => res.json())
		.then(data => {
			console.log('All data deleted.');
		})
  }
  render() {
    const { location } = this.props;
    return (
      <div className="row-flex-container">
          <div className="space"/>
				  <header className="App-header">
				  	<h1 className="App-title">Deisgn music demo</h1>
				  </header>
          <div className="row-flex-container icon-container" > 
            <IconButton 
              iconStyle={{color: '#FFF'}} 
              tooltip='DEMO' 
              onClick={this.navigate('/')}
              disabled={location.pathname === '/'}>
              <HomeIcon />
            </IconButton> 
            <IconButton 
              iconStyle={{color: '#FFF'}} 
              tooltip='檢視資料' 
              onClick={this.navigate('/data')}
              disabled={location.pathname === '/data'}>
              <ViewIcon />
            </IconButton>
            <IconButton 
              iconStyle={{color: '#FFF'}} 
              tooltip='刪除全部資料'
              onClick={this.deleteAll}>
              <DeleteIcon/>
            </IconButton>
          </div>
      </div>
    );
  }
}

export default withRouter(Header);