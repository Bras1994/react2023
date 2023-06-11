import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies : mappedMovies} = useMovies()
  return(
    <>
      <header className='buscador'>
        <h3>Buscador de peliculas</h3>
        <form action="" className="form">
          <input type="text" placeholder='Avengers,Matrix, Avatar...' />
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