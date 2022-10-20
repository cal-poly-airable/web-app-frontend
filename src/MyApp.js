import Table from './Table'
import Form from './Form';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function MyApp() {
    var domain="https://airable.yoelnozar.com"
    //domain="http://localhost:5000"
    const [characters, setCharacters] = useState([]);
    
    async function fetchAll(){
        try {
           const response = await axios.get(domain+'/users');
           return response.data.users_list;     
        }
        catch (error){
           //We're not handling errors. Just logging into the console.
           console.log(error); 
           return false;         
        }
     }
     useEffect(() => {
        fetchAll().then( result => {
           if (result)
              setCharacters(result);
         });
     }, [] );

     async function makePostCall(person){
        try {
           const response = await axios.post(domain+'/users', person);
           return response;
        }
        catch (error) {
           console.log(error);
           return false;
        }
     }
     
      function removeOneCharacter (index) {
        const toRemove = characters.filter((character, i) => {
            return i === index
          });
        axios.delete(domain+'/users/'+toRemove[0]._id)
        const updated = characters.filter((character, i) => {
            return i !== index
          });
        
          setCharacters(updated);
        }
        function updateList(person) { 
            makePostCall(person).then( result => {
            if (result && result.status === 201)
            console.log(result)
            console.log("result.data")
               setCharacters([...characters, result.data] );
            });
         }
            
        return (
            <div className="container">
              <Table characterData={characters} removeCharacter={removeOneCharacter} />
              <Form handleSubmit={updateList} />
            </div>
          )
  }

export default MyApp;