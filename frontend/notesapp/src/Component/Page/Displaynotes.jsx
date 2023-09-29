import { useEffect, useState } from "react";
import "./Notes.css";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Heading, Text, Button, Select } from "@chakra-ui/react";
import "../mediaquery.css";
import { myAuthContextProvider } from "../Context/AuthContextProvider";
import { useContext } from "react";

export const Displaynotes = ()=>{
    
    const [state, setState] = useState([]);
    const [filter, setFilter] = useState("");
    // console.log(filter)

    const [delet, setDelete] = useState(null);

    const [editNote, setEditNote] = useState({ id: null, notes: "", category: "" });
    const {token} = useContext(myAuthContextProvider);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        DisplayNotes();
    }, [delet, editNote]);
    
    
    // function for Display 

    const DisplayNotes = async() =>{
        let url = `http://localhost:8080/notes`;

        // if(filter === "mostimp"){
        //     url += "?category=important"
        // }

        // if(filter === "lessimp"){
        //     url += "?category="
        // }

        const res = await fetch(url);
        const data = await res.json();
        setState(data);
        setLoad(false);
        console.log(data);
    }

    // loader 
    if(load){
        return(
        <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>);

    }


    // filter function

    const handleFilter = (e) =>{
        setFilter(e.target.value);
    }

    // delete method

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/notes/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    console.log(`Item with ID ${id} deleted successfully.`);
                    // Optionally, update your local state or perform other actions
                    setDelete(id);
                    setState((prevState) => prevState.filter((item) => item._id !== id));
                } else {
                    console.error(`Error deleting item with ID ${id}.`);
                    // Handle errors here
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    
    
    // edit method

    const handleEdit = (note) => {
        setEditNote({ id: note._id, notes: note.notes, category: note.category });
    };

    const handleUpdate = () => {
        const { id, notes, category } = editNote;

        fetch(`http://localhost:8080/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ notes, category }),
        })
            .then((response) => {
                if (response.ok) {
                    console.log(`Note with ID ${id} updated successfully.`);
                    // Optionally, update your local state or perform other actions
                    setEditNote({ id: null, notes: "", category: "" });
                    setState((prevState) =>
                        prevState.map((item) =>
                            item._id === id ? { ...item, notes, category } : item
                        )
                    );
                } else {
                    console.error(`Error updating note with ID ${id}.`);
                    // Handle errors here
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };



    
    
    return(
        <div className="display-notes-container">
            <h1>Welcome Beautiful Humans 😊</h1>
            <select onChange={handleFilter}>
                <option>All</option>
                <option value="mostimp">Most Important</option>
                <option value="lessimp">Less Important</option>
            </select>

            <div>
                {
                    state.map((e) =>{
                        return(
                            <div className="Container">
                            

                            
<Card align='center'>

  <CardHeader >
    <Heading size='md'> Notes</Heading> <h4>Created At:- {e.createdAt}</h4> 

    {/* <h4>Created By:- {token.username}</h4> */}


  </CardHeader>

  <CardBody className="header">
    <Text>{e.notes}</Text>
  </CardBody>

  <CardBody>
    <Text>Category :{e.category}</Text>
  </CardBody>



  <CardFooter style={{ marginRight: '5px'}}>

  <Button style={{ marginRight: '5px' }} onClick={()=>{handleUpdate(e._id)}}>Edit</Button>
  <Button className="DeletButton" onClick={()=>{handleDelete(e._id)}}>Delete</Button>
</CardFooter>
</Card>
                            </div>
                        )
                    })
                }
            </div>
          


{/* Edit Form */}
{editNote.id && (
                <div className="edit-form">
                    <input
                        type="text"
                        placeholder="Edit Note"
                        value={editNote.notes}
                        onChange={(e) => setEditNote({ ...editNote, notes: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Edit Category"
                        value={editNote.category}
                        onChange={(e) => setEditNote({ ...editNote, category: e.target.value })}
                    />
                    <Button onClick={handleUpdate}>Update</Button>
                </div>
            )}
        </div>
    );
};



  
