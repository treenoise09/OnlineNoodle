import React,{Component,useContext,useEffect} from 'react';
import { useNavigate } from "react-router";
import { Card,CardActions,CardContent,CardMedia,Typography } from '@mui/material';
import { Button,Badge} from '@mui/material';
import {useState} from "react";
import { AuthContext } from './context';
import { useParams } from 'react-router-dom';


const OrderDrink = () =>{
    const { Menus,addCart} = useContext(AuthContext)
    let {sort} = useParams();
    const [detail,setdetail] = useState([])
    useEffect(()=>{let descript = Menus.filter(detil=>detil.id==sort)
    setdetail(descript[0])},[])

    const [Counter , setCount] = useState(0);
    const navigate = useNavigate();           

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
                
                    <CardMedia component="img" src={(require("./..\\img\\baitei.png"))} style={{border:"2px solid black",marginTop:30 }} />
      
                    <CardContent>
                    </CardContent>
                    
                </Card>
                <Card style={{ marginLeft:500,marginRight:500,backgroundColor:"#ecdff3" }}>
                    <CardContent><Typography><h4><center>{detail.name}</center></h4></Typography>
                           <div style={{width:"100%",display:"flex",justifyContent:"center"}}> <Button onClick={() => 
                                {if (Counter !== 0){
                                    setCount(Counter - 1)}
                                }}>-</Button>
                            <Button onClick={() => setCount(1 + Counter)} style={{alignSelf:"right"}}>+</Button>
                            </div>
                            </CardContent>
                </Card>
                <Card style={{ marginLeft:500,marginRight:500,backgroundColor:"#ecdff3" }}>
                    <CardContent><Typography style={{display:"flex",justifyContent:"center"}}>{Counter}</Typography></CardContent>
                </Card>
                <Card style={{ marginLeft:500,marginRight:500,backgroundColor:"#ecdff3" }}>
                    <CardContent><Typography style={{display:"flex",justifyContent:"center"}}>
                    <Button variant="contained" color="inherit" onClick={() => {navigate('../Menu/Drink',{replace:true})}}>Back</Button>
                    <Button variant="contained" color="inherit" onClick={() => {
                        let menu={menu:detail,Counter:Counter}
                        addCart(menu)
                    }}>OK</Button></Typography></CardContent>
                </Card>
                )
        </div>
        </div>
    );
}
export default OrderDrink;

