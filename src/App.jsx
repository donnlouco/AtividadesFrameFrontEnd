import { useState } from 'react'
import Cronometro from './CronometroMeu2'
import Formulario from './formulario'
import FiltroNumero from './filtroNumero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>MEU PROJETO DE FIXACAO REACT</h1>
    <Cronometro />
    <h2>FORMULARIO</h2>
    <Formulario/>
    <h1>FILTRAGEM NUMERO</h1>
    <FiltroNumero/>
    </>
    

  )
}

export default App
