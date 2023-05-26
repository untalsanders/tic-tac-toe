'use strict'

export function Square({ value, onClick }) {
    return (
        <div className="square" onClick={onClick}>
            {value}
        </div>
    )
}
