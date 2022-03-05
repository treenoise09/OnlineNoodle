import React from 'react';
import'./home.css';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


const Home = () =>{


    return (<div>
        <div className="cafe">
        <h1>Welcome To Online Noodle Shop</h1>
        <h1>Helloworld</h1>
        </div>
        <div className="Book1">
        <div align="center"><h1>Recommend</h1></div>
        <br />
        <br />
        </div>
        <CardGroup style={{ margin: 5, padding: 5 }}>
        <Card style={{ margin: 60, padding: 10,backgroundColor:"#ecdff3" }}>
        <CardImg top width="100%" src="https://cdn.pixabay.com/photo/2021/04/22/15/24/thai-food-6199274_960_720.jpg" style={{ width: 290, height: 170 }} />
            <CardBody>
                <CardTitle><font size = '64'><center>ก๋วยเตี๋ยว</center></font></CardTitle>
                <div ALIGN="RIGHT"><CardText></CardText></div>
            </CardBody>
        </Card>

        <Card style={{ margin: 60, padding: 10,backgroundColor:"#bcf8cf" }}>
        <CardImg top width="100%" src="https://cdn.pixabay.com/photo/2017/06/09/14/58/cocktail-2387063_960_720.jpg" style={{ width: 290, height: 170 }} />
            <CardBody>
                <CardTitle><font size = '64'><center>เครื่องดื่ม</center></font></CardTitle>
                <div ALIGN="RIGHT"><CardText></CardText></div>
        </CardBody>
        </Card>

        <Card style={{ margin: 60, padding: 10,backgroundColor:"#ecdff3" }}>
        <CardImg top width="100%" src="https://cdn.pixabay.com/photo/2016/10/20/16/29/asia-1755965_960_720.jpg" style={{ width: 290, height: 170 }} />
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