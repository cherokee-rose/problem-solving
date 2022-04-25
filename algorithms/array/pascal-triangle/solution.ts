/* 
    https://leetcode.com/problems/pascals-triangle/
    https://github.com/cherokee-rose

    Given an integer numRows, return the first numRows of Pascal's triangle.
    In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

    Example 1:
        Input: numRows = 5
        Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

    Example 2:
        Input: numRows = 1
        Output: [[1]]    

    Constraints:
        * 1 <= numRows <= 30
*/

function generate(numRows: number): number[][] {
    let triangle: number[][] = [[1]];
    
    for (let i = 0; i < numRows - 1; i++) {
      triangle.push([1]); 
      for (let j = 0; j < triangle[i].length - 1; j++) {
        triangle[i + 1].push(triangle[i][j] + triangle[i][j + 1]);
      }
      triangle[i + 1].push(1);
    }
      
    return triangle;
};