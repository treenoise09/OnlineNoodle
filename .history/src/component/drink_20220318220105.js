import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import './noodle.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";

const Drink = () => {
    const navigate = useNavigate();
    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
            <div className="myStyleBev">
                <br />
            <h1>เครื่องดื่ม</h1>
            </div>
            
        <div>
            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10,backgroundColor:"#ecdff3",cursor:'pointer' }}>
                    <Link to="/Ordrink">
                    <CardImg top width="100%" src={(require("./..\\img\\baitei.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>น้ำใบเตย</h4></CardTitle>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                    </Link>
                </Card>

                <Card style={{ margin: 10,backgroundColor:"#bcf8cf" }}>
                    <CardImg top width="100%" src={(require("./..\\img\\kajeab.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>น้ำกระเจี๊ยบ</h4></CardTitle>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10,backgroundColor:"#ffe8bf" }}>
                    <CardImg top width="100%" src={(require("./..\\img\\gekhuy.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>น้ำเก๊กฮวย</h4></CardTitle>
                        <div ALIGN="RIGHT"><CardText>100 BATH</CardText></div>
                    </CardBody>
                </Card>

            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10,backgroundColor:"#fcdee2"}}>
                    <CardImg top width="100%" src={(require("./..\\img\\cha.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>ชา</h4></CardTitle>
                        <div ALIGN="RIGHT"><CardText>110 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10,backgroundColor:"#e0f8e8"}}>
                    <CardImg top width="100%" src={(require("./..\\img\\lumyai.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>นำ้ลำไย</h4></CardTitle>
                        <div ALIGN="RIGHT"><CardText>110 BATH</CardText></div>
                    </CardBody>
                </Card>
                <Card style={{ margin: 10,backgroundColor:"#e0f8e8"}}>
                    <CardImg top width="100%" src={(require("./..\\img\\unchan.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>นำ้อัญชัน</h4></CardTitle>
                        <div ALIGN="RIGHT"><CardText>110 BATH</CardText></div>
                    </CardBody>
                </Card>
            </CardGroup>
            </div>
        </div>

    );
}

export default Drink;