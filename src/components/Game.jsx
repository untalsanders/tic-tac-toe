import { useState } from 'react'
import { checkWinner } from '../domain/board'
import { TUNRS } from '../domain/constants'
import { Board } from './Board'
import '../index.css'

function Game() {
    const [history, setHistory] = useState(() => {
        return [
            {
                squares: Array(9).fill(null),
            },
        ]
    })
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    // const [winner, setWinner] = useState(null)

    const handleClick = i => {
        const _history = history.slice(0, stepNumber + 1)
        const current = _history[stepNumber]
        const squares = current.squares.slice()
        if (checkWinner(squares) || squares[i]) {
            return
        }
        squares[i] = xIsNext ? TUNRS.X : TUNRS.O
        setHistory(_history.concat([{ squares }]))
        setStepNumber(_history.length)
        setXIsNext(!xIsNext)
    }

    const jumpTo = step => {
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }

    const current = history[history.length - 1]
    const winner = checkWinner(current.squares)

    const moves = history.map((_key, index) => {
        return (
            <li key={index}>
                <button onClick={() => jumpTo(index)}>
                    {index ? `Go to move #${index}` : `Go to game start`}
                </button>
            </li>
        )
    })

    let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? TUNRS.X : TUNRS.O}`

    return (
        <div className="game"> 
            <h1>Tic Tac Toe</h1>
            <div className="game-board">
                <Board squares={current.squares} onClick={i => handleClick(i)} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

export default Game
