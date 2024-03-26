export const saveGame = (board, turn) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', JSON.stringify(turn))
}

export const resetGame = () => {
    window.localStorage.removeItem('board')
    window.localStorage.remove('turn')
}