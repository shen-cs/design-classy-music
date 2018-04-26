import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Demo from './Demo';
import Data from './Data';

export default class extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Demo}/>
          <Route exact path='/data' component={Data}/>
        </Switch>
      </main>
    )
  }
}