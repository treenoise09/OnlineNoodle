import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import './noodle.css';


const Drink = () => {
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

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
                    <CardImg top width="100%" src={(require("./..\\img\\baitei.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Americano</h4></CardTitle>
                        <CardText>Although the Americano is created with espresso, don't expect it to taste exactly like one. Because of the fact that it is diluted with water, it loses some of the kick of espresso and instead tastes more like a richer, bolder cousin of the black coffee.</CardText>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
                    <CardImg top width="100%" src={(require("./..\\img\\kajeab.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Espresso</h4></CardTitle>
                        <CardText>Espresso should be bitter, but not too bitter (high levels of bitterness are more characteristic of espresso long shots). It should be rich, but not too rich. It should NOT be sour.</CardText>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#ffe8bf" }}>
                    <CardImg top width="100%" src={(require("./..\\img\\gekhuy.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Cappuccino</h4></CardTitle>
                        <CardText>A well-made cappuccino has incredible flavor and texture. It has a bold coffee taste and some sweetness from the naturally occurring lactose sugar in milk. It may also be flavored with sugar, with flavored simple syrups, and other additives. </CardText>
                        <div ALIGN="RIGHT"><CardText>100 BATH</CardText></div>
                    </CardBody>
                </Card>

            </CardGroup>

            <CardGroup style={{ margin: 5, padding: 5 }}>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#fcdee2"}}>
                    <CardImg top width="100%" src={(require("./..\\img\\cha.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Mocha</h4></CardTitle>
                        <CardText>The flavor Mocha is basically a chocolate taste mixed with a coffee taste. It is not to be confused with the Mocha Coffee Bean which comes from Yemen, named after the place it came from (Mocha, Yemen).</CardText>
                        <div ALIGN="RIGHT"><CardText>110 BATH</CardText></div>
                    </CardBody>
                </Card>

                <Card style={{ margin: 10, padding: 10,backgroundColor:"#e0f8e8"}}>
                    <CardImg top width="100%" src={(require("./..\\img\\lumyai.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>Latte</h4></CardTitle>
                        <CardText>Latte are also milder, and this is more so when compared to other espresso-based beverages like cappuccino. Its milder flavor comes from the presence of a lot of steamed milk. But, despite being almost sweet, it still has a stronger espresso taste than mocha.</CardText>
                        <div ALIGN="RIGHT"><CardText>110 BATH</CardText></div>
                    </CardBody>
                </Card>
            </CardGroup>
            </div>
        </div>

    );
}

export default Drink;