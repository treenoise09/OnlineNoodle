import React, { Component } from 'react';
import Home from './component/home.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import noodle from './component/noodle.js'
import {Route,BrowserRouter as Router} from 'react-router-dom';
const Noodle = () => <h1>Noodle</h1>
class App extends Component {
  render(){
  return (
    
      <div>
        
        <Home/>

      </div>
    
  );
}
}

export default App;
