import React, { Component } from 'react';
import Header from '../components/Header';
import Main from './Main';
import '../css/App.css'; 

export default class extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    )
  }
}