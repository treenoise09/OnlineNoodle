import React, { Component } from 'react';
import Home from './component/home.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Noodle from './component/noodle.js'
import Sweet from './component/sweet.js';
import Drink from './component/drink.js';
import DataTable from './Admin.js';
import Logi from './component/Li.js';
import CusLogi from './component/Login/CusLogin.js';
import AdLogi from './component/Login/AdLogin.js';
import Dashboard from './component/Dashboard/Dashboard.js';
import Login from './component/Login/Login.js';
import Preferences from './component/Preferences/Preferences.js';
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
          <Route path="/CusLogin" element={<CusLogi/>}/>
          <Route path="/AdLogin" element={<AdLogi/>}/>
          <Route path="/Admin" element={<DataTable/>}/>
          <Route path='/Li' element={<Logi/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}
}
export default App;    
