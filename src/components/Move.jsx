export function Move({ move, onClick }) {
    return (
        <li>
            <button onClick={() => jumpTo(index)}>
                {index ? `Go to move #${index}` : `Go to game start`}
            </button>
        </li>
    )
}
