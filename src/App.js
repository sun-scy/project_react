import React, { Component } from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Admin from './container/admin/admin'
 import './App.less';
export default class App extends Component {
  render() {
    return (
       <Switch>
				<Route path="/admin" component={Admin}/>
				<Redirect to="/admin"/>
			</Switch>
    )
  }
}
