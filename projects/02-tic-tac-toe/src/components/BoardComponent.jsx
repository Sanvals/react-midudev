import { Square } from './Square'

export function BoardComponent ({ board, updateBoard }) {
    return (
        board.map((_, index) => {
            return (
            <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
            >
                {board[index]}
            </Square>
            )
        })
    )
}