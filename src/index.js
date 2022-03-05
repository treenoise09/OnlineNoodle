import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
const Onlinenoodle = () => (
<React.StrictMode>
  <Navbar/>
    <App />
  </React.StrictMode>
)
ReactDOM.render(<Onlinenoodle /> ,document.getElementById('root'));
//Hello World
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
