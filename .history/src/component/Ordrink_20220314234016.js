import React from "react";
import { Card,CardImg,CardBody,CardTitle,CardText } from "reactstrap";
import { Button,TextField,Box } from '@mui/material';
let n = 0;
const EA = () =>{
    
}
function NA(n) {

      n = n++;
    return n.toString();
    
  }
const OrderDrink = () =>{
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
                    <CardImg top width="100%" src={(require("./..\\img\\baitei.png"))} style={{marginLeft:200, width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4><center>น้ำใบเตย</center></h4></CardTitle>
                            <Button onClick={NA}>+</Button>
                            <CardText>{NA(n)}</CardText>
                    </CardBody>
                </Card>
        </div>
        </div>
    );
}
export default OrderDrink;