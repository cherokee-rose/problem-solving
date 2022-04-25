/* 
  https://leetcode.com/problems/pascals-triangle-ii/
  https://github.com/cherokee-rose

  Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
  In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

  Example 1:
    Input: rowIndex = 3
    Output: [1,3,3,1]
 
  Example 2:
    Input: rowIndex = 0
    Output: [1]

  Example 3:
    Input: rowIndex = 1
    Output: [1,1]

  Constraints:
    * 0 <= rowIndex <= 33

  Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/

function getRow(rowIndex: number): number[] {
  let triangle: number[] = new Array(rowIndex + 1);
  triangle[0] = 1;
  let lastNumber: number = 1;

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = 1; j <= i; j++) {
      if (triangle[j] === undefined) {
        triangle[j] = lastNumber;
      } else {
        triangle[j] = triangle[j] + lastNumber;
        lastNumber = triangle[j] - lastNumber;
      }
    }
  }

  return triangle;
}
