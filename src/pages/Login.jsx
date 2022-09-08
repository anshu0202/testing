import React, { useState } from 'react'

const Login = () => {
  
  const [user,setUser]=useState({
    name:"",password:""
  });
  
  let name,value;
  const handleInputs= (e)=>{
    console.log(e);
    name = e.target.name;
    value =e.target.value;
    setUser({...user,[name]:value});
  }


  return (
       <div className="login box">
        <h1>Login</h1>
        <div className="userInput">
          <input type="text" placeholder='Username' name='username' value={user.name} onChange={handleInputs} />
          <input type="password" placeholder='Password' name='password' value={user.password} onChange={handleInputs} />
        </div>
        <button className='btn'>Login</button>
       </div>

  )
}

export default Login
