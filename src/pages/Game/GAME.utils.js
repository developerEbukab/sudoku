const sudoku = require('sudoku');

export const ALLOWED_INPUTS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const STRUCTURE_PUZZLE = puzzle => {
  // THIS FUNCTION REPLACES NULL WITH 0
  return puzzle.map(item => item == null ? 0 : item)
}

export const CREATE_NEW_PUZZLE = () => {
  const newPuzzle = sudoku.makepuzzle();

  let createdPuzzle = [
    STRUCTURE_PUZZLE(newPuzzle.slice(0, 9)), 
    STRUCTURE_PUZZLE(newPuzzle.slice(9, 18)), 
    STRUCTURE_PUZZLE(newPuzzle.slice(18, 27)), 
    STRUCTURE_PUZZLE(newPuzzle.slice(27, 36)), 
    STRUCTURE_PUZZLE(newPuzzle.slice(36, 45)), 
    STRUCTURE_PUZZLE(newPuzzle.slice(45, 54)), 
    STRUCTURE_PUZZLE(newPuzzle.slice(54, 63)), 
    STRUCTURE_PUZZLE(newPuzzle.slice(63, 72)), 
    STRUCTURE_PUZZLE(newPuzzle.slice(72, 82))
  ]

  let unEditableValues = []

  createdPuzzle.forEach((arrItems, arrIndex, arr) => {
    arrItems.forEach((item, itemIndex, arr) => {
      if (item !== 0) {
        unEditableValues.push(`${arrIndex}${itemIndex}`)
      }
    })
  })

  return {createdPuzzle, unEditableValues }
}

export const checkForValidity = (board, y, x, n) => {
  for (let i = 0; i < 9; i++) {
    if (board[y][i] === n || board[i][x] === n) {
      return false;
    }
  }

  const xSquare = Math.floor(x / 3) * 3;
  const ySquare = Math.floor(y / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[ySquare+i][xSquare+j] === n) {
        return false;
      }
    }
  }

  return true;
}

export const SOLVE_BOARD = (board) => {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (board[y][x] === 0) {
        for (let n = 1; n <= 9; n++) {
          if (checkForValidity(board, y, x, n)) {
            board[y][x] = n;
            
            if (SOLVE_BOARD(board)) return board;
          }
        }
        
        board[y][x] = 0;
        return false;
      }
    }
  }
  
  return board;
}