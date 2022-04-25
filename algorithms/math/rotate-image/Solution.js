/*
    https://leetcode.com/problems/rotate-image/
    https://github.com/cherokee-rose

    You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
    You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
    DO NOT allocate another 2D matrix and do the rotation.

    Example:
        Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
        Output: [[7,4,1],[8,5,2],[9,6,3]]

    Constraints:
        * n == matrix.length == matrix[i].length
        * 1 <= n <= 20
        * -1000 <= matrix[i][j] <= 1000
*/

 var rotate = function(matrix) {
    let next, row, col;
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
        for (let j = i; j < matrix.length - i - 1; j++) {
            next = matrix[i][j];
            row = j;
            col = matrix.length - 1 - i;

            for (let k = 0; k < 4; k++) {
                next = next ^ matrix[row][col];
                matrix[row][col] = next ^ matrix[row][col];
                next = next ^ matrix[row][col];
                row = row ^ col;
                col = row ^ col;
                row = row ^ col;
                col = matrix.length - col - 1;

            }
            
        }
        
    }

    return matrix;
    
};

