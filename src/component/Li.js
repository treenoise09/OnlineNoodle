import React from 'react';
import { Button,TextField,Box } from '@mui/material';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Reg/Reg.css';
import { margin } from '@mui/system';

const Logi= () =>{
    return(<div>
<CardGroup style={{ margin: 5, padding: 5 }}>

    <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
        <CardBody>
            <CardTitle><h1><center>Login</center></h1></CardTitle>
            <div style={{marginBottom:"15px"}} ALIGN="center"><TextField
                 required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
            />
            </div>
            <div ALIGN="center"><TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            </div>
            <Link to={'/Reg'}><div ALIGN="center"><Button className='btn'>Register</Button></div></Link>
                  <Link to="/CusLogin"><div ALIGN="center"><Button variant="outline">For Customer</Button></div></Link>
                    <Link to="/Admin"><div ALIGN="center"><Button variant="outline">For Admin</Button></div></Link>
        </CardBody>
    </Card>
</CardGroup>
    </div>
    );
}
export default Logi;