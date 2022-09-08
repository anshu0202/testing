import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate();
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

  const PostData = async (e)=>{
      //  fetch api ko call kr k data waha prr send krna h
      e.preventDefault();
      const {name, password} =user;
      const res= await fetch("/register1",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        // server ko data string k form me send krna hoga server data ko json k format me nhi smjhta h
        body:JSON.stringify({
               name,password
        })
        // body:user
      });
      const data= await res.json();
      if(data.status===422 || !data){
        window.alert("Registeration failed");
        console.log("invalid")
      }
      else{
        window.alert("Registeration successful");
        console.log("valid registeration")
        navigate("/feature");
      }
  }

  return (
    <div className="register box">
    <h1>Register</h1>
    <form method='POST'>
    <div className="userInput">
      <input type="text" placeholder='Username' name='name' value={user.name} onChange={handleInputs}  />
      <input type="password" placeholder='Password' name='password' value={user.password} onChange={handleInputs}  />
    </div>
    <button className='btn' onClick={PostData}>Register</button>
    </form>
   </div>
  )
}

export default Register
