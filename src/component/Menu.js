import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './context';
import React,{useEffect,useContext, useState} from 'react';
import { CardGroup } from 'reactstrap';
import './drink.css';
import { Card,CardActions,CardContent,CardMedia,Typography } from '@mui/material';
import { useParams} from 'react-router-dom';
import { useNavigate } from "react-router";
import { Category, Details } from '@mui/icons-material';
const Drink = () => {
    let {type} = useParams();
    const {Menus} = useContext(AuthContext);

    const [FilterMenu,setFilter] = useState([])
    useEffect(()=>{
        let filter = Menus.filter(menu=>menu.category==type)
        setFilter(filter)
        }
    ,[])

    const navigate = useNavigate();
    
    return (
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
            <div className="myStyleBev">
                <br />
            <h1>{type}</h1>
            
            </div>
            
        <div>
            <CardGroup style={{ margin: 5, padding: 5}}>

                {FilterMenu.map((value)=>{console.log(value)
                    return (
                    <Card style={{ padding:10,margin: 10,backgroundColor:"#ecdff3",cursor:'pointer' }}onClick={() => {navigate('../Ordrink/'+value.id,{replace:true})}}>
                   
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