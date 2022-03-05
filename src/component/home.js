import React,{Component} from 'react';
import'./home.css';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
const Home = () =>{


    return (<div>
        <div className="cafe">
        <h1>Welcome To Online Noodle Shop</h1>
        </div>
        <div className="Book1">
        <div align="center"><h1>Recommend</h1></div>
        <br />
        <br />
        </div>
        <CardGroup style={{ margin: 5, padding: 5 }}>
        <Card style={{ margin: 60, padding: 10,backgroundColor:"#2FA4FF" }}><Link to="/noodle">
        <CardImg top width="100%" src={require("./..\\img\\noodle.gif")} style={{ width: 290, height: 170 }} />
            <CardBody>
                <CardTitle><font size = '64'><center>ก๋วยเตี๋ยว</center></font></CardTitle>
                <div ALIGN="RIGHT"><CardText></CardText></div>
            </CardBody></Link>
        </Card>

        <Card style={{ margin: 60, padding: 10,backgroundColor:"#2FA4FF" }}>
        <CardImg top width="100%" src={require("./..\\img\\effervescent.gif")} style={{ width: 290, height: 170 }} />
            <CardBody>
                <CardTitle><font size = '64'><center>เครื่องดื่ม</center></font></CardTitle>
                <div ALIGN="RIGHT"><CardText></CardText></div>
        </CardBody>
        </Card>

        <Card style={{ margin: 60, padding: 10,backgroundColor:"#2FA4FF" }}>
        <CardImg top width="100%" src={require("./..\\img\\cake.gif")} style={{ width: 290, height: 170 }} />
            <CardBody>
                <CardTitle><font size = '64'><center>ของหวาน</center></font></CardTitle>
                <div ALIGN="RIGHT"><CardText></CardText></div>
            </CardBody>
        </Card>
    </CardGroup>
        <div>

        </div>
        </div>


    );
}
export default Home;