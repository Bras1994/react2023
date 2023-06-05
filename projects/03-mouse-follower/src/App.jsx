import { useEffect, useState } from 'react'
import  './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState ({x:0, y:0})

  //Pointer Move

  useEffect (()=>{
    console.log('efecto', {enabled})

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => { // cleanup method
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }

  },[enabled])

  return (

    <main>
      <div className="bolita" style={{
      transform:  `translate(${position.x}px , ${position.y}px)`}}>
      </div>
      <button onClick={()=> setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} : seguir puntero
      </button>
    </main>

  )
}

export default App
