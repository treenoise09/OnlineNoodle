import React,{Component,useContext} from 'react';
import { useNavigate } from "react-router";
import { Card,CardImg,CardBody,CardTitle,CardText } from "reactstrap";
import { Button,Badge} from '@mui/material';
import {useState} from "react";
import { color } from "@mui/system";
import { AuthContext } from './context';
import Menu from './Menu/menuobj'
import { Addchart } from '@mui/icons-material';
const OrderDrink = () =>{
    const [Counter , setCount] = useState(0);
    const navigate = useNavigate();           
    const { Menus,addMenu,Cart,addCart} = useContext(AuthContext)
    
    return(
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
            <div className="myStyleBev">
                <br />
            <h1>เครื่องดื่ม</h1>
            </div>
        <div>
        
                <Card style={{ marginLeft:500,marginRight:500,backgroundColor:"#ecdff3" }}>
                
               
                    <CardImg top width="100%" src={(require("./..\\img\\baitei.png"))} style={{border:"2px solid black",marginTop:30 }} />
      
                    <CardBody>
                    </CardBody>
                    
                </Card>
                <Card style={{ marginLeft:500,marginRight:500,backgroundColor:"#ecdff3" }}>
                    <CardBody><CardTitle><h4><center>น้ำใบเตย</center></h4></CardTitle>
                           <div style={{width:"100%",display:"flex",justifyContent:"center"}}> <Button onClick={() => 
                                {if (Counter !== 0){
                                    setCount(Counter - 1)}
                                }}>-</Button>
                            <Button onClick={() => setCount(1 + Counter)} style={{alignSelf:"right"}}>+</Button>
                            </div>
                            </CardBody>
                </Card>
                <Card style={{ marginLeft:500,marginRight:500,backgroundColor:"#ecdff3" }}>
                    <CardBody><CardText style={{display:"flex",justifyContent:"center"}}>{Counter}</CardText></CardBody>
                </Card>
                <Card style={{ marginLeft:500,marginRight:500,backgroundColor:"#ecdff3" }}>
                    <CardBody><CardText style={{display:"flex",justifyContent:"center"}}>
                    <Button variant="contained" color="inherit" onClick={() => {navigate('../Drink',{replace:true})}}>Back</Button>
                    <Button variant="contained" color="inherit" onClick={() => {
                        addCart(new Menu("น้ำใบเตย","./..\\img\\baitei.png",25,"drinks"))
                        let menu={menu:new Menu("น้ำใบเตย","./..\\img\\baitei.png",25,"drinks"),Counter:Counter}
                        addCart(menu)
                    }}>OK</Button></CardText></CardBody>
                </Card>
        </div>
        </div>
    );
}
export default OrderDrink;

