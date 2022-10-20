import React, { Component,useEffect,useMemo ,useState} from 'react';
import Home from './component/home.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Drink from './component/Menu.js';
import DataTable from './Admin.js';
import Logi from './component/Li.js';
import CusLogi from './component/Login/CusLogin.js';
import AdLogi from './component/Login/AdLogin.js';
import Form from './component/Reg/Reg.js';
import OrderDrink from './component/Ordrink.js';
import Cart from './component/Cart.js';
<<<<<<< HEAD

=======
import Dashboard from './component/Dashboard/Dashboard.js';
import Login from './component/Login/Login.js';
import Preferences from './component/Preferences/Preferences.js';
import Navbar from './component/Navbar';
import { AuthContext } from './component/context';
import OrderNoodle from './component/Ordernoodle.js';
>>>>>>> 09695a921d9223d67c1a1cc4d6b3bfcaebf1518c
import {
  BrowserRouter as Router,
  Routes,
  Route
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
    new Menu("D1","น้ำใบเตย","../img/baitei.png",15,"drinks"),
    new Menu("D2","น้ำกระเจี๊ยบ","../img/baitei.png",15,"drinks"),
    new Menu("D3","น้ำเก๊กฮวย","../img/baitei.png",15,"drinks"),
    new Menu("D4","น้ำชา","../img/baitei.png",20,"drinks"),
    new Menu("D5","น้ำโค๊ก","../img/baitei.png",20,"drinks"),
    new Menu("D6","น้ำเปล่า","../img/baitei.png",10,"drinks"),
    new Menu("N1","เส้นเล็ก","../img/baitei.png",40,"noodle"),
    new Menu("N2","เส้นหมี่","../img/baitei.png",40,"noodle"),
    new Menu("N3","เส้นหมี่หยก","../img/baitei.png",40,"noodle"),
    new Menu("N4","เส้นบะหมี่","../img/baitei.png",40,"noodle"),
    new Menu("N5","เส้นก๋วยจั๊บ","../img/baitei.png",40,"noodle"),
    new Menu("S1","sweet-1","../img/baitei.png",25,"sweet"),
    new Menu("S2","sweet-2","../img/baitei.png",25,"sweet"),
    new Menu("S3","sweet-3","../img/baitei.png",25,"sweet"),
    new Menu("S4","sweet-4","../img/baitei.png",25,"sweet"),
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
                    <Route path="/Menu/:type" element={<Drink/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Ornoodle" element={<OrderNoodle/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/Ordrink/:sort" element={<OrderDrink/>}/>
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
