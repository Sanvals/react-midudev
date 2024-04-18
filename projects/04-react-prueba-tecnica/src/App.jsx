import { useState, useEffect } from 'react'
import { getRandomFact } from './assets/services/facts'
const IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'

function App() {
  const [fact, setFact] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {getRandomFact().then(setFact)}, [])

  useEffect(() => {
    if (!fact) return
    fetch(IMAGE_URL)
      .then(res => res.json())
      .then(data => setImage(data[0].url))
  }, [fact])

  const handleClick = () => {
    getRandomFact().then(setFact)
  }

  return (
    <>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Generar new cat</button>
      <>{fact && <p>{fact}</p>}</>
      <>{image && <img src={image} alt='cat' />}</>
    </>
  )
}

export default App
