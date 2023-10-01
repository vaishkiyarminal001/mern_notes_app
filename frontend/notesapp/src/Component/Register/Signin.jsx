import { useState } from "react";
import "./Register.css";
import { useContext } from "react";
import { myAuthContextProvider } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signin() {

  const {isAuth, login, token} = useContext(myAuthContextProvider);
  console.log(token);

    const InitalValue = {
        email : "",
        password : ""
    }

    const [state, setState] = useState(InitalValue);
    console.log(state);

const handleInput = (e) =>{
    setState({...state, [e.target.name] : e.target.value});
}


const handleClick = (e) =>{

    e.preventDefault();

    const requestOptions = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(state),
       };
       fetch("http://localhost:8080/login", requestOptions)
       .then((response)=> response.json())
       .then((token)=> login(token));

      //  toast("Successfully Login");

      if(token){
        toast("Successfully Login");
      }
      // else {
      //   toast("Invalid Crendatials");
      // }
      
}



if(token){
  return <Navigate to="/"/>
}

  return (
    <div>

        <h2>🔐Login Yourself</h2>

      <form className="signin-container">
           <input name="email" placeholder="Enter Your Email"  onChange={handleInput}/>
           <input name="password" placeholder="Enter Your Password" type="password" onChange={handleInput}/>

           <button onClick={handleClick}>Signin</button>
          
    </form>
      
    </div>
  )
}
