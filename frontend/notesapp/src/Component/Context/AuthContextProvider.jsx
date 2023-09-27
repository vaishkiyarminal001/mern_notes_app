import { createContext } from "react";
import { useState } from "react";

export const myAuthContextProvider = createContext();

 function AuthContextProvider({children}) {

    const [isAuth, setAuth] = useState(false);
    const [token, setToken] = useState("");

    console.log(token);


    const login = (token) =>{
        setToken(token);
        setAuth(true);
    }

    const logout = () =>{
      setToken("");
        setAuth(false);

    }
  return (
    <div>

        <myAuthContextProvider.Provider value={{login, logout, isAuth, token}}>{children}</myAuthContextProvider.Provider>
      
    </div>
  )
}
export default AuthContextProvider
