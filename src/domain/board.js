'use strict'

import { WINNER_COMBOS } from './constants'

export const checkWinner = boardToCheck => {
    for (const line of WINNER_COMBOS) {
        const [a, b, c] = line
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    return null
}

export const checkEndGame = newBoard => newBoard.every(square => square != null)
