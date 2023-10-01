import { useState } from "react";
import "./Register.css";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {


    const InitalData = {
        username : "",
        email : "",
        password : "",
        phone : "",
        age : ""
    }
    const [state, setState] = useState(InitalData);
    // console.log(state);

    const [boolean, stateBoolean] = useState(false);
    

    const handleInput = (e) =>{
        setState({...state, [e.target.name]:e.target.value});
    }


    // Post method

    const handleSubmit = (e) =>{
        e.preventDefault();

            const requestOptions = {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(state),
               };
               fetch("http://localhost:8080/signup", requestOptions)
               .then((response)=> response.json())
               .then((data)=> console.log(data));
    
               stateBoolean(true);
               toast("Register Successfull");
               
    }

  if(boolean){
    return <Navigate to="/singin"/>
  }

  return (
    <div>
        <h2>📝 Register Yourself</h2>

        <form className="form-container">
           <input name="username" placeholder="Enter Your Username" type="name" onChange={handleInput}/>
           <input name="email" placeholder="Enter Your Email" onChange={handleInput}/>
           <input name="password" placeholder="Enter Your Password" type="password" onChange={handleInput}/>
           <input name="phone" placeholder="Enter Your Phone Number" type="number" onChange={handleInput}/>
           <input name="age" placeholder="Enter Your Age" type="number" onChange={handleInput}/>

            <button onClick={handleSubmit}>Register</button>
        </form>
      
    </div>
  )
}
