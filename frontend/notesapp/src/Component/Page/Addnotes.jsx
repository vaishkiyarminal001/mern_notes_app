import { useState } from "react";
import "./Notes.css";
import "../mediaquery.css";

const IntitalNotes = {
    notes : "",
    category : ""
}

export const Addnotes = ({})=>{

    const [state, setState] = useState(IntitalNotes);
    console.log(state);

    // input box for adding notes
    const handleInput = ((e)=>{
        setState({...state, [e.target.name]:e.target.value});
    })

    const handlePost = (e) =>{
        e.preventDefault();


         // post method 


         const requestOptions = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(state),
           };
           fetch("http://localhost:8080/create", requestOptions)
           .then((response)=> response.json())
           .then((data)=> console.log(data));
        //    DisplayNotes()
           alert("Successfully Posted");
          

    }

   



    return(
        <div className="add-notes-container">
           <h1>Add your amazing Notes 📝</h1>
           <form onSubmit={handlePost}>
            <textarea name="notes" placeholder="Write Your important Words" onChange={handleInput} rows={6}></textarea>
            
            <select name = "category" onChange={handleInput}>
                <option>Category</option>
                <option value="Most Important" >Most Important</option>
                <option value="Less Important" >Less Important</option>
            </select>
            <input type="Submit"></input>
           </form>
        </div>
    )
}