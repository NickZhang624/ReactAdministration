import {Button,message} from 'antd'
import './App.less'
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        // <div className="App">
        //   <Button type="primary" onClick={this.buttonClick}>222</Button>
        // </div>    
          <BrowserRouter>
          <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='' component={Admin}></Route>
          </Switch>
          </BrowserRouter> 
     )
  }

  // buttonClick=()=>{
  //   message.success('Please try it again',6)
  // }
}
 
export default App;
