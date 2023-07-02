import React, { useState, useEffect } from 'react'
import { Card } from './Card';
import { getPersonajesNaruto } from '../helpers';
import { Error } from './Error';

const initialPersonajes = [
  {
    id: 1,
    name: 'Naturo',
  },
  {
    id: 2,
    name: 'Sasuke',
  },
  {
    id: 3,
    name: 'Minato',
  },
  {
    id: 4,
    name: 'kayuya'
  },
  {
    id: 5,
    name: 'Kakashi hatake'
  },
  {
    id: 6,
    name: 'Neji'
  }
]

export const Select = ({ choicePersonajeNaruto }) => {

  const [ personajes, setPersonajes ] = useState(initialPersonajes);
  const [ error, setError ] = useState(null);
  useEffect(() => {
    updatePersonajes();
  }, []);

  const updatePersonajes = () => {
    getPersonajesNaruto().then(( newPersonajes ) => {
      setPersonajes(newPersonajes);
    }).catch( (error) => {
      console.log(error);
      setError('Error al cargar la Api');
    })
  }
  console.log(personajes)
  return (
    <>
      <select onChange={(e) => choicePersonajeNaruto(e.target.value)}>
      
        {
          personajes.map( personaje => (
            <option key={ personaje.id } value={ personaje.id }>{ personaje.name }</option>
      
          ))
        }
      </select>

      { error && <Error error = { error } />}
      
    </>
  )
}
