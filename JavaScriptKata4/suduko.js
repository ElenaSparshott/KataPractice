// Sudoku Solution Validator
// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.


function valid9(arr){
  let sorted =  arr.slice().sort(function(a, b){return a - b});
  for(let i = 0; i < 9; i++){
    if(sorted[i] != i+1){
      return false  
    }
  }
  return true
}
// createSquare(board, 3, 6)

function createSquare(board, row, col){
  
  let array = []
  
  array.push(board[row][col])
  array.push(board[row][col + 1])
  array.push(board[row][col + 2])
  
  array.push(board[row + 1][col])
  array.push(board[row + 1][col + 1])
  array.push(board[row + 1][col + 2])
  
  array.push(board[row + 2][col])
  array.push(board[row + 2][col + 1])
  array.push(board[row + 2][col + 2])
  
  return array
}

function validSolution(board){
  for(let i = 0; i < board.length; i++){
    let answer = valid9(board[i])
    if(answer === false){
      return false
    }
  }

  
  for(let mycol = 0; mycol < board.length; mycol++){
    let newArray = []
    for(let myrow = 0; myrow < 9; myrow++){
      newArray.push(board[myrow][mycol])
    }
    let answer = valid9(newArray)
     if(answer === false){
      return false
    }
  }
  
  
  for(let row = 0; row < 9; row += 3){
    for(let col = 0; col < 9; col += 3){
      let theSquare = createSquare(board, row, col)
      let answer = valid9(theSquare)
      if(answer === false){
        return false
      }
    }
  }
  
  return true
}
