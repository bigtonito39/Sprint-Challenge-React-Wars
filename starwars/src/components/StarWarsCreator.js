import React, {useState, useEffect} from 'react';
import axios from "axios";
import StarWarsLister from "./StarWarsLister"
import styled from "styled-components"


const CardsDiv = styled.div `
display:flex;
border:dotted gold 8px;
justify-content: space-evenly;
width:100%;
flex-wrap: wrap;
margin: 2% 0;



`
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
    <CardsDiv>
   {warsCreator.map((char, id) => {
   return(
        <div> 
    <StarWarsLister
    key={id}
    name={char.name}
    gender={char.gender}
    birth_year={char.birth_year}
    hair_color={char.hair_color}
    height={char.height}
    mass={char.mass}
    
    />
 
        </div>
     )
   
    })
   
    
})}
    </CardsDiv>
  );
}




