import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"
import { Square } from './components/Square.jsx'
import { TURNS, WINNER_COMBOS } from './constants.js'
import { WinnerModal,checkEndGame } from './components/WinnerModal.jsx'



function App() {
  const [board, setBoard] = useState(()=>{
    const boardFromStorage=  window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : //valor inicial del estado
    Array(9).fill(null) //valor por defecto
  })

  const[turn, setTurn]=useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.x
  }
    
    )

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

    //reset de local storage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

 

  const updateBoard =(index)=>{
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    //Guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    //Revisar si hay ganador
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
