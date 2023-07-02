import { useEffect, useState } from "react"
import { Select, Card } from "./components/"
import { getPersonaje, getPersonajesNaruto } from "./helpers"

import './index.css'

const initialPersonaje = {
  image: '',
  personaje: {
    id: '',
    name: '',
  }
}


function App() {
  const [ personaje, setPersonaje ]  = useState(initialPersonaje);
  const [ loading, setLoading ] = useState(false);
  useEffect(() => {
    choicePersonajeNaruto(2);
  }, []);

  const choicePersonajeNaruto = ( id ) => {
    setLoading(true)
    getPersonaje(id).then( (choice) => {
      setPersonaje( choice );
      setLoading(false)
      console.log(choice)
    })
  }

  return (
    // Primera Forma
    // <div className="app">
    //   <Select choicePersonajeNaruto = { choicePersonajeNaruto } />
    //   {
    //     loading? <h1>Loading...</h1>: <Card personaje = { personaje } />
    //   }
      
    // </div>
    // Segunda Forma
    <div className="app">
      <Select choicePersonajeNaruto = { choicePersonajeNaruto } />
      
      <Card personaje = { personaje } loading = { loading } />
    </div>

  )
}

export default App
