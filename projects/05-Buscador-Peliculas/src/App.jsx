import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies : mappedMovies} = useMovies()
  const inputRef = useRef()
  const handleSubmit = (event)=>{
    event.preventDefault()
    const value = inputRef.current.value //esta creando un objecto que solo va a cambiar despues del current  - Recuperar el elemento del dom
    console.log(value)
  }

  return(
    <>
      <header className='buscador'>
        <h3>Buscador de peliculas</h3>
        <form name='query' onClick={handleSubmit} action="" className="form">
          <input ref={inputRef} type="text" placeholder='Avengers,Matrix, Avatar...' />
          <button type='submit'> Buscar </button>
        </form>
      </header>

      <main className='resultado'>
        <Movies movies={mappedMovies}/>
      </main>
 
    </>
  )
}

export default App