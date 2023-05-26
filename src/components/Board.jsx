'use strict'

import { Square } from './Square'

export function Board({ squares, onClick }) {
    return squares.map((_, square) => <Square key={square} value={squares[square]} onClick={() => onClick(square)} />)
}
