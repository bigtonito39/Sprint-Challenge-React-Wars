import React from 'react';
import styled from "styled-components"






const Cards = styled.div`

width: 100%;
border: solid gold 3px;
background-color: black;
padding:10px;
font-size:0.9rem;
opacity: 0.6;
border-radius:15px;
color: white;
margin-top:2%;
flex: 7;

`


const StarWarsLister = (props) => {

    return (
   
  
    <Cards>
      <h1>Name: {props.name}</h1>
       <h2>gender: {props.gender}</h2>
       <h3>birth year: {props.birth_year}</h3>
       <h4>hair_color: {props.hair_color}</h4>
       <h5>height: {`${props.height} ft`}</h5>
       <h5>mass: {`${props.mass} kg`}</h5>
            
     
    </Cards>
  

  )
}

export default StarWarsLister;