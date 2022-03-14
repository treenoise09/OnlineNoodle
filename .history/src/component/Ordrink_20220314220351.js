import React from "react";
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
                <Card style={{ margin: 10,backgroundColor:"#ecdff3" }}>
                    <CardImg top width="100%" src={(require("./..\\img\\baitei.png"))} style={{ width: 450, height: 250 }} />
                    <CardBody>
                        <CardTitle><h4>น้ำใบเตย</h4></CardTitle>
                        <div ALIGN="RIGHT"><CardText>95 BATH</CardText></div>
                    </CardBody>
                </Card>
        </div>
        </div>
    );
}