import React,{Component,useContext} from 'react';
import'./home.css';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import {AuthContext} from './context';
const Home = () =>{
    return (
    <div style={{backgroundColor:'transparent'}}>
        <div className="cafe">
            <h1>Welcome To Online Noodle Shop</h1>
        </div>
        <CardGroup style={{ margin: 5, padding: 5 }}>
            <Card style={{ margin: 60, padding: 10,backgroundColor:"#2FA4FF" }}>
                <Link to="/Menu/noodle" style={{display:'flex',justifyContent:'centers',flexDirection:'column'}}>
                    <CardImg  width="100%" src={require("./..\\img\\noodle.gif")} style={{height: 170 }} />
                        <CardBody>
                            <CardTitle><font size = '64'><center>ก๋วยเตี๋ยว</center></font></CardTitle>
                        </CardBody>
                </Link>
            </Card>
            <Card style={{ margin: 60, padding: 10,backgroundColor:"#2FA4FF" }}>
            <CardImg top width="100%" src={require("./..\\img\\effervescent.gif")} style={{ height: 170 }} />
            <Link to="/Menu/drinks">
                <CardBody>
                        <CardTitle><font size = '64'><center>เครื่องดื่ม</center></font></CardTitle>
                        <div ALIGN="RIGHT"><CardText></CardText></div>
                    </CardBody>
                </Link>
            </Card>
            <Card style={{ margin: 60, padding: 10,backgroundColor:"#2FA4FF" }}>
            <CardImg top width="100%" src={require("./..\\img\\cake.gif")} style={{ height: 170 }} />
            <Link to="/Menu/sweet">
                <CardBody>
                    <CardTitle><font size = '64'><center>ของหวาน</center></font></CardTitle>
                    <div ALIGN="RIGHT"><CardText></CardText></div>
                    </CardBody>
                </Link>
            </Card>
        </CardGroup>
    </div>


    );
}
export default Home;