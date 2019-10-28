import React, {useState, useEffect} from 'react';
import axios from "axios";
import StarWarsLister from "./StarWarsLister"


export default function StarWarsCreator(){

const [warsCreator, setWarsCreator] = useState([]);

useEffect (()=>{
axios
.get(`https://swapi.co/api/people/`)
.then(response => {
  
setWarsCreator(response.data.results)

})
.catch(err=> {
console.log(`this problem is returning following error: ${err}`)
})

},[]);



return (
    <div className="characters">
   {warsCreator.map((char, id) => {
   console.log(char)
return(
        <div> 
    <StarWarsLister
    key={id}
    name={char.name}
    gender={char.gender}
    birth_year={char.birth_year}
    
    />
 
        </div>
     )
   
    })
   
    
})}
    </div>
  );
}




