import './App.css'
import { useState, useEffect, useRef } from 'react'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    // Check if it's the first time the component renders
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('no puede estar vacio')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('no puede ser un numero')
      return
    }

    if (search.length < 3) {
      setError('debe ser de más de 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })


  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }


  
  return (
    <div className="page">
      <header>
        <h2>Buscador de películas</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder="Avengers, Star Wars, Matrix..."/>
          <button type='submit'>Buscar</button>
        </form>
        { error && <p className='error'>{ error }</p>}
      </header>
      <main>
        <Movies movies={ movies }/>
      </main>
    </div>
  )
}

export default App
