import React from "react";
import { Card,CardImg,CardBody,CardTitle,CardText } from "reactstrap";
import { Button,TextField,Box } from '@mui/material';
import {useState} from "react";
import { Link } from "react-router-dom";
const OrderDrink = () =>{
    const [Counter , setCount] = useState(0);
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
                    <Link to ="/Ordrink">
                    <CardImg top width="100%" src={(require("./..\\img\\baitei.png"))} style={{marginLeft:200, width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4><center>น้ำใบเตย</center></h4></CardTitle>
                            <Button onClick={() => 
                                {if (Counter !== 0){
                                    setCount(Counter - 1)}
                                }}>-</Button>
                            <Button onClick={() => setCount(1 + Counter)} style={{justifyContent:"right"}}>+</Button>
                           

                            <CardText>{Counter}</CardText>
                    </CardBody>
                </Card>
        </div>
        </div>
    );
}
export default OrderDrink;