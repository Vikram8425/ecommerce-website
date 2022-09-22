import { Button } from 'reactstrap';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {checkLogin, checkLogin1, getCurrentUser, logout} from '../auth'
import Base from './Base';

function Dashboard() {
  const navigate=useNavigate();

  const [user, setUser] = useState(null)


  useEffect(() => {
    console.log(getCurrentUser())
    setUser(getCurrentUser())
  },[])
    
  const logoutUser=()=>{
    logout(()=>{
      navigate("/")
    });
  }
  return (
 <Base>
     <>
    {console.log(user)}
   {user && (
    <div>
      <h1>Login user is {user.email} {user.name}</h1>
      <Button onClick={logoutUser} color="success">Logout</Button>
    </div>
   )}
    </>
 
 </Base>
  )
}

export default Dashboard