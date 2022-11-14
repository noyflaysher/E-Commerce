import React, { useState } from 'react';
import "Login.css";
import {Link, useHistory} from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';

function Login() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

  return (
    <div className='login'>
        <Link to="/" style={{textDecoration:"none"}}>
            <div className="login__logo">
                <StorefrontIcon className='login__logoImage' fontSize="large"/>
                <h2 className="login__logoTitle">eSHOP</h2>
            </div>
        </Link>

        

    </div>
  )
}

export default Login