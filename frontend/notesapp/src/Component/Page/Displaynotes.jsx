import { useEffect, useState } from "react";
import "./Notes.css";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Heading, Text, Button, Select } from "@chakra-ui/react";
import "../mediaquery.css";

export const Displaynotes = ()=>{
    
    const [state, setState] = useState([]);
    const [filter, setFilter] = useState("");
    console.log(filter)
    
    useEffect(() =>{
        DisplayNotes();
    },[]);
    
    
    // function for Display 

    const DisplayNotes = async() =>{
        let url = `http://localhost:8080/`;

        // if(filter === "mostimp"){
        //     url += "?category=important"
        // }

        // if(filter === "lessimp"){
        //     url += "?category="
        // }

        const res = await fetch(url);
        const data = await res.json();
        setState(data);
        console.log(data);
    }


    // filter function

    const handleFilter = (e) =>{
        setFilter(e.target.value);
    }

    
    
    
    
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
    <Heading size='md'> Notes</Heading>
  </CardHeader>

  <CardBody className="header">
    <Text>{e.notes}</Text>
  </CardBody>

  <CardBody>
    <Text>Category :{e.category}</Text>
  </CardBody>


  <CardFooter>
    <Button colorScheme='blue'>Delete</Button>
  </CardFooter>
</Card>
                            </div>
                        )
                    })
                }
            </div>
            {/* <Addnotes DisplayNotes={DisplayNotes}/> */}
        </div>
    )
}