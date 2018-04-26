import React, { Component } from 'react';
import firebase from '../firebase';
import CircularProgress from 'material-ui/CircularProgress';

export default class extends Component {
  state = {
    data: null,
    success: false
  }
  componentWillMount() {
    const firebaseRef = firebase.database().ref('/records');
    firebaseRef.on('value', (snap) => {
      // console.log(snap.val())
      this.setState({
        data: snap.val(),
        success: true
      });
    });
  }
  
  dataToList = (data) => (
    Object.keys(data).map((key) => data[key])
  );
  
  renderRecord = (item, index) => {
    return (
      <p key={index}>{item.timestamp}<span>{item.type}</span></p>
    )
  }
  render() {
    const { data, success } = this.state;
    if(success) {
      if(data) {
        const records = this.dataToList(data);
        return (
          <div style={{color: '#FFF'}}>
            {records.map(this.renderRecord)}
          </div>
        )
      }
      else {
        return (
          <div style={{color: '#FFF'}}>
            Data empty!!
          </div>
        )
      }
    }
    else {
      return (
        <div style={{color: '#FFF'}}>
          <CircularProgress size={80} thickness={8}/>
        </div>
      )
    }
  }
}