import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import './noodle.css';
import { useNavigate } from 'react-router';


const Noodle = () => {
    const navigate = useNavigate();
    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
            <div className="myStyleBev">
                <br />
            <h1>Welcome to Rendezvous Cafe</h1>
            <br />
            <h2>Beverage and Dessert</h2>
                <br />
            </div>
            
        <div>
            <CardGroup style={{ margin: 5, padding: 5 }}>
                
                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ffffff",cursor:'pointer' }} onClick={() => {navigate('../Ornoodle',{replace:true})}}>
               <CardImg top width="100%" src={require("../img/lek.jpg")} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>เส้นเล็ก</h4></CardTitle>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ffffff" ,cursor:'pointer'}}>
                    <CardImg top width="100%" src={require("../img/mii.jpg")} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Espresso</h4></CardTitle>
                        <CardText>Espresso should be bitter, but not too bitter (high levels of bitterness are more characteristic of espresso long shots). It should be rich, but not too rich. It should NOT be sour.</CardText>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ffffff" ,cursor:'pointer'}}>
                    <CardImg top width="100%" src={require("../img/meelueng.jpg")} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Cappuccino</h4></CardTitle>
                        <CardText>A well-made cappuccino has incredible flavor and texture. It has a bold coffee taste and some sweetness from the naturally occurring lactose sugar in milk. It may also be flavored with sugar, with flavored simple syrups, and other additives. </CardText>
                        <div ALIGN="RIGHT"><CardText>100 BATH</CardText></div>
                    </CardBody>
                </Card>

            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ffffff",cursor:'pointer'}}>
                    <CardImg top width="100%" src={require('../img/miiyok.png')} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Mocha</h4></CardTitle>
                        <CardText>The flavor Mocha is basically a chocolate taste mixed with a coffee taste. It is not to be confused with the Mocha Coffee Bean which comes from Yemen, named after the place it came from (Mocha, Yemen).</CardText>
                        <div ALIGN="RIGHT"><CardText>110 BATH</CardText></div>
                    </CardBody>
                </Card>

            </CardGroup>
            </div>
        </div>

    );
}

export default Noodle;