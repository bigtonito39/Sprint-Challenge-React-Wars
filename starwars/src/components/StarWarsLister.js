import React from 'react';
import styled from "styled-components"




const StarWarsLister = (props) => {

    return (
    <div className="Character-list">
    <div className="Cards">
      <h1>Name: {props.name}</h1>
       <h2>gender: {props.gender}</h2>
       <h2>birth year: {props.birth_year}</h2>
       
      
     
    </div>
  </div>
  )
}

export default StarWarsLister;