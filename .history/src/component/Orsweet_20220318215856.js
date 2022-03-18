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
                
                <Badge style={{cursor:"pointer"}}  color="secondary" badgeContent=" X " onClick={() => {navigate('../sweet',{replace:true})}}>
                    <CardImg top width="100%" src={(require("./..\\img\\baitei.png"))} style={{border:"2px solid black",marginLeft:200, width: 450, height: 250,marginTop:30 }} />
                    </Badge>
                    <CardBody>
                    </CardBody>
                    
                </Card>
                <Card style={{ marginLeft:500,marginRight:500,backgroundColor:"#ecdff3" }}>
                    <CardBody><CardTitle><h4><center>เส้นเล็ก</center></h4></CardTitle>
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
                    <CardBody><CardText style={{display:"flex",justifyContent:"center"}}><Button variant="contained" color="inherit">OK</Button></CardText></CardBody>
                </Card>
        </div>
        </div>
    );
}
export default OrderSweet;