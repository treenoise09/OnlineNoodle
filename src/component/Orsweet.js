import React from "react";
import { Card,CardImg,CardBody,CardTitle,CardText } from "reactstrap";
import { Button,Badge} from '@mui/material';
import {useState} from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const OrderSweet = () =>{
    const [Counter , setCount] = useState(0);
    const navigate = useNavigate();
    return(
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
            <div className="myStyleBev">
                <br />
            <h1>ของหวาน</h1>
            </div>
            
        <div>
        
        <Card style={{ marginLeft:500,marginRight:500,backgroundColor:"#ecdff3" }}>
                
                    <Badge color="secondary" badgeContent=" X "onClick={() => {navigate('../Drink',{replace:true})}}>
                        <CardImg top width="100%" src={(require("./..\\img\\baitei.png"))} style={{marginLeft:200, width: 450, height: 250 }} />
                    </Badge>
                <CardBody>
            </CardBody>
                    
                </Card>
                <Card style={{ marginLeft:500,marginRight:500,backgroundColor:"#ecdff3" }}>
                    <CardBody><CardTitle><h4><center>น้ำใบเตย</center></h4></CardTitle>
                            <Button onClick={() => 
                                {if (Counter !== 0){
                                    setCount(Counter - 1)}
                                }}>-</Button>
                            <Button onClick={() => setCount(1 + Counter)} style={{alignSelf:"right"}}>+</Button>

                            </CardBody>
                </Card>
                <Card style={{ marginLeft:500,marginRight:500,backgroundColor:"#ecdff3" }}>
                    <CardBody><CardText>{Counter}</CardText></CardBody>
                </Card>
                
        </div>
        </div>
    );
}
export default OrderSweet;