import React,{Component,useContext} from 'react';
import'./home.css';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import {AuthContext} from './context';
import { Button } from '@mui/material';
const Cart = () =>{


    return (
        <div className="Background-component">
        <div style={{backgroundColor:'transparent'}}>
        <div className="cafe">
        <h1>รถเข็น</h1>
        </div>
        <div style={{backgroundColor:'#ffffff'}}><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
        <CardGroup style={{ margin: 5, padding: 5 }}>
        <Card style={{ margin: 60, padding: 10,backgroundColor:"#2FA4FF" }}>
            <Link to="/noodle" style={{display:'flex',justifyContent:'centers',flexDirection:'column'}}>
                <CardImg  width="100%" src={require("./..\\img\\noodle.gif")} style={{height: 170 }} />
                     <CardBody>
                        <CardTitle><font size = '64'><center>ก๋วยเตี๋ยว</center></font></CardTitle>
                     </CardBody>
            </Link>
        </Card>

        <Card style={{ margin: 60, padding: 10,backgroundColor:"#2FA4FF" }}>
        <CardImg top width="100%" src={require("./..\\img\\effervescent.gif")} style={{ height: 170 }} />
           <Link to="/drink">
               <CardBody>
                    <CardTitle><font size = '64'><center>เครื่องดื่ม</center></font></CardTitle>
                    <div ALIGN="RIGHT"><CardText></CardText></div>
                </CardBody>
            </Link>
        </Card>

        <Card style={{ margin: 60, padding: 10,backgroundColor:"#2FA4FF" }}>
        <CardImg top width="100%" src={require("./..\\img\\cake.gif")} style={{ height: 170 }} />
           <Link to="/sweet">
               <CardBody>
                <CardTitle><font size = '64'><center>ของหวาน</center></font></CardTitle>
                <div ALIGN="RIGHT"><CardText></CardText></div>
                </CardBody>
            </Link>
        </Card>
    </CardGroup>
        <div>

        </div>
        </div>
        </div>

    );
}
export default Cart;