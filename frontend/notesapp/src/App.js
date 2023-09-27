import Navbar from './Component/Navbar/Navbar';
import { Allrouts } from './Component/Routs/Allrouts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      {/* <Displaynotes/> */}

<Navbar/>
      <Allrouts/>
      <ToastContainer/>

      
    </div>
  );
}

export default App;
