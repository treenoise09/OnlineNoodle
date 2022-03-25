import React, { Component,useEffect,useMemo ,useState} from 'react';
import Home from './component/home.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Noodle from './component/noodle.js'
import Sweet from './component/sweet.js';
import Drink from './component/drink.js';
import DataTable from './Admin.js';
import Logi from './component/Li.js';
import CusLogi from './component/Login/CusLogin.js';
import AdLogi from './component/Login/AdLogin.js';
import Form from './component/Reg/Reg.js';
import OrderDrink from './component/Ordrink.js';
import OrderNoodle from './component/Ornoodle.js';
import OrderSweet from './component/Orsweet.js';
import Cart from './component/Cart.js';
import Dashboard from './component/Dashboard/Dashboard.js';
import Login from './component/Login/Login.js';
import Preferences from './component/Preferences/Preferences.js';
import Navbar from './component/Navbar';
import { AuthContext } from './component/context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Menu from './component/Menu/menuobj'
import './App.css';
const AuthContextProvider = ({ children }) => {
  const [Cart,setCart] = useState([])
    const addCart = (menu) =>{
      let list = Cart
      list.push(menu)
      console.log(Cart)
      setCart(list)
    }
  const [Menus,setMenu] = useState([
    new Menu("drink0","../img/baitei.png",25,"drinks"),
    new Menu("drink-1","../img/baitei.png",25,"drinks"),
    new Menu("drink-2","../img/baitei.png",25,"drinks"),
    new Menu("drink-3","../img/baitei.png",25,"drinks"),
    new Menu("noodle-1","../img/baitei.png",25,"noodle"),
    new Menu("noodle-2","../img/baitei.png",25,"noodle"),
    new Menu("noodle-3","../img/baitei.png",25,"noodle"),
    new Menu("noodle-4","../img/baitei.png",25,"noodle"),
    new Menu("sweet-1","../img/baitei.png",25,"sweet"),
    new Menu("sweet-2","../img/baitei.png",25,"sweet"),
    new Menu("sweet-3","../img/baitei.png",25,"sweet"),
    new Menu("sweet-4","../img/baitei.png",25,"sweet"),
])
   const addMenu = (menu) => {
     let list = Menus
     list.push(menu)
     setMenu(list)
   }
   const value2 = {Menus,addMenu,Cart,addCart}
   return (
    <AuthContext.Provider value={value2}>
      {children}
    </AuthContext.Provider> 
   )
}
function App() {
  //const [hello,setHello] = useState("Hello")
  //const [counter,setCounter] = useState(0)
 //context

 //
 //const value = useMemo(() => ({hello}),[hello])
 //const value1 = useMemo(() => {return {name:"name"})

  return (  
        <AuthContextProvider>
          <Navbar/>
          <div className='background'>
          <Router>
                  <Routes>
                    <Route path="/sweet" element={<Sweet/>}/>
                    <Route path="/drink" element={<Drink/>}/> 
                    <Route path="/noodle" element={<Noodle/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/Ordrink" element={<OrderDrink/>}/>
                    <Route path="/Orsweet" element={<OrderSweet/>}/>
                    <Route path="/Ornoodle" element={<OrderNoodle/>}/>
                    <Route path="/Reg" element={<Form/>}/>
                    <Route path="/CusLogin" element={<CusLogi/>}/>
                    <Route path="/AdLogin" element={<AdLogi/>}/>
                    <Route path="/Admin" element={<DataTable/>}/>
                    <Route path='/Li' element={<Logi/>}/>
                  </Routes>
            </Router>
            </div>
        </AuthContextProvider> 
  );
}
export default App;    
