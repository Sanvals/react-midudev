import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner } from './logic/board'
import { saveGame, resetGame } from './logic/storage'
import { WinnerModal } from './components/WinnerModal'
import { BoardComponent } from './components/BoardComponent'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    if(turnFromStorage) return JSON.parse(turnFromStorage)
    return TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGame(newBoard, newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (!newBoard.includes(null)) {
      setWinner(false)
    }
  }

  const clearBoard = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGame()
  }

  return (
    <main className='board'>
    <h1>Tic tac toe</h1>
    <button onClick={clearBoard}>Reset de juego</button> 
    <section className='game'>
      <BoardComponent board={board} updateBoard={updateBoard}/>
    </section>
    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
      <WinnerModal clearBoard={clearBoard} winner={winner}/>
    </main>
  )
}

export default App
