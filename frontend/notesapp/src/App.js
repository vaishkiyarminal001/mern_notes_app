import Navbar from './Component/Navbar/Navbar';
import { Allrouts } from './Component/Routs/Allrouts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import "./App.css";


function App() {

  const [toggle, setButton] = useState(true);
  console.log(toggle)
  return (
  
  <div className="App" style={{
    backgroundColor: toggle ? "white" : "black",
    color: toggle ? "black" : "white",
  }}>
      {/* <Displaynotes/> */}

<Navbar/>
<button className="Mode" onClick={(() =>{
  setButton(!toggle);
  
})}>{toggle ? "Dark" : "Light"}</button>



      <Allrouts/>
      <ToastContainer/>

      
    </div>
  );
}

export default App;
