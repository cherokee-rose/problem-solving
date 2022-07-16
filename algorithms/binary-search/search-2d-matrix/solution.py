"""
https://github.com/cherokree-rose
https://leetcode.com/problems/search-a-2d-matrix/

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
    * Integers in each row are sorted from left to right.
    * The first integer of each row is greater than the last integer of the previous row. 
    
Example 1:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output: true
    
Constraints:
    * m == matrix.length
    * n == matrix[i].length
    * 1 <= m, n <= 100
    * -10^4 <= matrix[i][j], target <= 10^4
"""


class Solution:
    def searchMatrix(self, matrix: list, target: int) -> bool:
        left = 0
        right = len(matrix)
        row_index = left + (right - left) // 2

        while left <= right and left < len(matrix):
            if matrix[row_index][0] <= target and target <= matrix[row_index][-1]:
                left = 0
                right = len(matrix[row_index])
                break
            elif target < matrix[row_index][0]:
                right = row_index - 1
            elif target > matrix[row_index][-1]:
                left = row_index + 1

            row_index = left + (right - left) // 2

        if left <= right and left < len(matrix):
            col_index = left + (right - left) // 2
            while left <= right and left < len(matrix[row_index]):
                if matrix[row_index][col_index] == target:
                    return True
                elif target < matrix[row_index][col_index]:
                    right = col_index - 1
                elif target > matrix[row_index][col_index]:
                    left = col_index + 1

                col_index = left + (right - left) // 2

        return False
