import React from 'react';

const StarWarsLister = (props) => {

    return (
    <div className="Character-list">
    <div className="bottom">
      <h2>Name: {props.name}</h2>
     
    </div>
  </div>
  )
}

export default StarWarsLister;