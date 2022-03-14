import React from "react";
import { Card,CardImg,CardBody,CardTitle,CardText } from "reactstrap";
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
                        <CardTitle><h4>น้ำใบเตย</h4></CardTitle>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>
        </div>
        </div>
    );
}
export default OrderDrink;