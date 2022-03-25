import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './context';
import React,{useContext} from 'react';
import { CardGroup } from 'reactstrap';
import { Card,CardActions,CardContent,CardMedia,Typography } from '@mui/material';
import './noodle.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";

const Drink = () => {
    const navigate = useNavigate();
    const {Menus} = useContext(AuthContext);
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
            <CardGroup style={{ margin: 5, padding: 5}}>

                {Menus.map((value)=>{console.log(value)
                    return (<Card style={{ padding:10,margin: 10,backgroundColor:"#ecdff3",cursor:'pointer' }}onClick={() => {navigate('../Ordrink',{replace:true})}}>
                   
                   <CardMedia component={"img"} src={require('../img/baitei.png')} height = "250" style={{width:"450px"}}/>
                   <CardContent>
                       <Typography variant="h1" component="div">{value.name}</Typography>
                       <div ALIGN="RIGHT"><Typography>{value.price} BATH</Typography></div>
                   </CardContent>
                  
               </Card>)})
                }
            </CardGroup>
            </div>
        </div>

    );
}

export default Drink;