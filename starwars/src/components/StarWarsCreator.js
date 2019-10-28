import React, {useState, useEffect} from 'react';
import axios from "axios";
import StarWarsLister from "./StarWarsLister"


export default function StarWarsCreator(){

const [warsCreator, setWarsCreator] = useState([]);

useEffect (()=>{
axios
.get(`https://swapi.co/api/people/1/`)
.then(response => {
  
setWarsCreator(response.data)

})
.catch(err=> {
console.log(`this problem is returning following error: ${err}`)
})

},[]);



return (
    <div className="characters">
   {Object.keys(warsCreator).map((key,index) => {
    const data = warsCreator;
    console.log(data)
  
     
    return(
       <div> 
   <StarWarsLister 
    key={data[index]}
    name={data["name"]}
   
   />

       </div>
    )

})}
    </div>
  );
}




