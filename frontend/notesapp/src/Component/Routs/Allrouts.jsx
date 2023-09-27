import {Routes, Route} from "react-router-dom";
import { Displaynotes } from "../Page/Displaynotes";
import { Addnotes } from "../Page/Addnotes";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Register from "../Register/Register";
import Signin from "../Register/Signin";
import Privaterout from "./Privaterout";


export const Allrouts = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Privaterout><Displaynotes/></Privaterout>}></Route>
                <Route path="/add" element={<Privaterout><Addnotes/></Privaterout>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/singin" element={<Signin/>}></Route>
            </Routes>
        </div>
    )
}