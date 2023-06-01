import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"
import { Square } from './components/Square.jsx'
import { TURNS, WINNER_COMBOS } from './constants.js'
import { WinnerModal,checkEndGame } from './components/WinnerModal.jsx'



function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const[turn, setTurn]=useState(TURNS.x)

  const [winner, setWinner] = useState(null)

  const checkWinner =(boardToCheck)=>{
    for (const combo of WINNER_COMBOS){
        const [a,b,c] = combo
        if (
          boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
        ){
          return boardToCheck[a]
        }
    }
    return null
  }

  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }

 

  const updateBoard =(index)=>{
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

    return(
      <main className='board'>
        <h1>Ta te ti</h1>
        <button onClick={resetGame}> Reset del juego</button>
        <section className='game'>
          {
            board.map((_,index)=>{
              return(
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard} //Se pasa la función y no la ejecución, updateBoard(). Porque al rendizar, ejecutrará la función todas la veces que sea. Y lo que e quiere es que s ejecute cuando el usuario haga click en el casillero. 
                  >
                    {board[index]}
                </Square>
              )
            })
          }
        </section>
        <section className="turn">
          <Square isSelected={turn=== TURNS.x}>
            {TURNS.x}
          </Square>
          <Square isSelected={turn=== TURNS.o}>
            {TURNS.o}
          </Square>
        </section>
        <WinnerModal resetGame={resetGame} winner={winner} />
      </main>

    )
}

export default App
