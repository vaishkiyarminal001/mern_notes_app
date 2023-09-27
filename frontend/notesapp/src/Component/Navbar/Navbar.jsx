import { Link } from "react-router-dom";
import "./Navbar.css"
import "../mediaquery.css";
import { myAuthContextProvider } from "../Context/AuthContextProvider";
import { useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Navbar() {

    const {token,logout} = useContext(myAuthContextProvider);

    const myLink = [
        {
            path:"/",
            Title : "Home",
        },

        {
            path:"/add",
            Title : "Add Notes",
        },

        {
            path:"/about",
            Title : "About",
        },

        {
            path:"/contact",
            Title : "Contact",
        },



    ]

    // logout 

    const handleLogout = () =>{
      toast("Logout Successfull");
      logout();
      
    }



  return (
    <div className="navbar-container">

        {
            myLink.map((e) =>(<Link className="navbar-link" to={e.path}>{e.Title}</Link>))
        }



        

{!token ? (
  <>
  
    <Link to="/register" className="navbar-register">Register</Link>
    <Link to="/signin" className="navbar-register">Signin</Link>
  </>
) : (
  <span className="navbar-link" onClick={handleLogout}>Logout</span>
)}

<span className="spanName">{token.username}</span>
      
    </div>
  )
}
