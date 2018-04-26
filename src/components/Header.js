import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase';
import Snackbar from 'material-ui/Snackbar';
import HomeIcon from 'material-ui/svg-icons/action/home';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ViewIcon from 'material-ui/svg-icons/action/visibility';
import IconButton from 'material-ui/IconButton';
import '../css/App.css';
import '../css/common.css';


class Header extends Component { 
  
  state = {
    empty: false
  };

  componentDidMount() {
    this.firebaseRef = firebase.database().ref('/records');
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {      
      if(!snap.val()) {
        console.log('Data Empty');
        this.setState({empty: true}, () => {
          setTimeout(() => this.setState({empty: false}), 3000)
        });
      }
    });
  }
  
  componentWillUnmount() {
    // Un-register the listener on '/todoList'.
    this.firebaseRef.off('value', this.firebaseCallback);
  }

  navigate = (path) => () => {
    this.props.history.push(path);
  }

  deleteAll = () => {
    this.firebaseRef.remove();
  }

  handleRequestClose = () => {
    this.setState({emtpy: false});
  }
  render() {
    const { location } = this.props;
    return (
      <div className="row-flex-container">
          <div className="space"/>
				  <header className="App-header">
				  	<h1 className="App-title">Design music demo</h1>
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
          <Snackbar 
            open={this.state.empty}
            message="資料已淨空"
            contentStyle={{backgroundColor: '#212121'}}/>
      </div>
    );
  }
}

export default withRouter(Header);