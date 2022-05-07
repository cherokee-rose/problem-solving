/*
  https://github.com/cherokee-rose
  https://leetcode.com/problems/valid-sudoku/

  Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
    * Each row must contain the digits 1-9 without repetition.
    * Each column must contain the digits 1-9 without repetition.
    * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
  Note:
    * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    * Only the filled cells need to be validated according to the mentioned rules.
  
  Constraints:
    * board.length == 9
    * board[i].length == 9
    * board[i][j] is a digit 1-9 or '.'.
*/
function isValidSudoku(board: string[][]): boolean {
  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      if (board[row][col] !== "." && !validator(board, row, col)) {
        return false;
      }
    }
  }

  return true;
}

function validator(board: string[][], row: number, col: number) {
  function horizontal(): boolean {
    for (let COL = 0; COL < 9; COL += 1) {
      if (COL === col) {
        continue;
      }

      if (board[row][COL] === board[row][col]) {
        return false;
      }
    }

    return true;
  }

  function vertical(): boolean {
    for (let ROW = 0; ROW < 9; ROW += 1) {
      if (ROW === row) {
        continue;
      }

      if (board[ROW][col] === board[row][col]) {
        return false;
      }
    }

    return true;
  }

  function square(): boolean {
    // (row / 3) * 3 === row - row % 3
    // (col / 3) * 3 === col - col % 3
    let endRow = row - (row % 3);
    let endCol = col - (col % 3);
    for (let ROW = endRow; ROW < endRow + 3; ROW += 1) {
        for (let COL = endCol; COL < endCol + 3; COL += 1) {
        if (ROW === row && COL === col) {
          continue;
        }

        if (board[ROW][COL] === board[row][col]) {
          return false;
        }
      }
    }

    return true;
  }

  return horizontal() && vertical() && square();
}