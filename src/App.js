import React, { Component } from 'react';
import Home from './component/home.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Noodle from './component/noodle.js'
import Sweet from './component/sweet.js';
import Drink from './component/drink.js';
import DataTable from './Admin.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
class App extends Component {
  render(){
  return (
<Router>
      <div className='background'>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/sweet" element={<Sweet/>}/>
          <Route path="/drink" element={<Drink/>}/> 
          <Route path="/noodle" element={<Noodle/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/Admin" element={<DataTable/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}
}
export default App;    
