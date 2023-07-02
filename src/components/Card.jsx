import React, { useState } from 'react'
import { Spinner } from './Spinner'

export const Card = ({ personaje, loading }) => {
  console.log(personaje)
  const personajeInfo = personaje.info
  if(personaje.info) {

    const keys = Object.keys(personajeInfo)
    const values = Object.values(personajeInfo)
    
    if( loading ) return <Spinner />
  // const info = ( personajeInfo ) => {

  //   const personajeInfoShow = [];

  //   for (let key in personajeInfo) {
  //     personajeInfoShow.push(
  //       <li key={key}>
  //         <span>{Object.keys(personajeInfo[key])} - {personajeInfo[key]}</span>
  //       </li>
  //     );
  //   }

  //   return personajeInfoShow;
  // }
  return (
    <div className='card'>
      {/* <img src={ (personaje.images.length) === 1 ? personaje.images[1] : personaje.images } alt="Naruto" /> */}
      {/* <img src={ personaje.images[0] } alt={ personaje.name } /> */}
      {personaje.images && personaje.images.length > 0 &&
        <img src={personaje.images[0]} alt={personaje.name} />
      }
      {/* {
        (personaje.images && personaje.images.length) ? (
          <img src={ personaje.images } alt={ personaje.name } />
        ) : (
          <img src={ personaje.images[0] } alt={ personaje.name } />
        )
      } */}
      <p>{ personaje.name }</p>
      <ul>
        {/* {info(personajeInfo)} */}
        {keys.map((key, index) => (
          <li key={index}>
            <b>{key}:</b> <span>{values[index]}</span>
          </li>
        ))}
      </ul>
        
      
    </div>
  )
} else {
  return null
  } 
}
