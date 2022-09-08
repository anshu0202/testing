import React from 'react'
import {useNavigate} from 'react-router-dom';
import  './home.css'
const Home = () => {

  const navigate = useNavigate();
  const goRegister= ()=>{
    navigate("/register");
  }
  return (
    <div className='container'>
      <div >
      <h1>This is home page</h1>
        <button className='btn space'>Login</button>
        <button className='btn space' onClick={goRegister} >Register</button>
      </div>
    </div>
  )
}

export default Home
