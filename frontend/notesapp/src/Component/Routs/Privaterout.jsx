import { myAuthContextProvider } from "../Context/AuthContextProvider"
import { useContext } from "react";
import { Navigate } from "react-router-dom";


export default function Privaterout({children}) {

    const {token} = useContext(myAuthContextProvider);

    if(!token){
        return <Navigate to="/singin"/>
    }
  return children;
}
