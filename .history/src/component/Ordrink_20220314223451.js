import { border } from "@mui/system";
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
                <Card style={{margin:10,backgroundColor:"#ecdff3" }}>
                    <CardImg top width="100%" src={(require("./..\\img\\baitei.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <border>
                        <CardTitle><h4>น้ำใบเตย</h4></CardTitle>
                        </border>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>
        </div>
        </div>
    );
}
export default OrderDrink;