import './App.css'

function App() {
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
        Aquí irán los resultados
      </main>

    </>
  )
}

export default App