import React, { useState } from 'react'
import { Board } from './components/Board'
import './index.css'

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

    const handleClick = i => {
        const _history = history.slice(0, stepNumber + 1)
        const current = _history[stepNumber]
        const squares = current.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = xIsNext ? 'X' : 'O'
        setHistory(_history.concat([{ squares }]))
        setStepNumber(_history.length)
        setXIsNext(!xIsNext)
    }

    const jumpTo = step => {
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }

    const current = history[history.length - 1]
    const winner = calculateWinner(current.squares)

    const moves = history.map((_key, index) => {
        return (
            <li key={index}>
                <button onClick={() => jumpTo(index)}>
                    {index ? `Go to move #${index}` : `Go to game start`}
                </button>
            </li>
        )
    })

    let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`

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

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }

    return null
}

export default Game
