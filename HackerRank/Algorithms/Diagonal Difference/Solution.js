/*
    github.com/cherokee-rose

    Source: HackerRank
    Problem:
        Given a square matrix, calculate the absolute difference between the sums of its diagonals.
        For example, the square matrix arr is shown below:

        1 2 3  1 2 3 4
        4 5 6  1 2 3 4
        9 8 9  1 2 3 4
               1 2 3 4

        The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17.
        Their absolute difference is |15 - 17| = 2.
 */

/*
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let diagonalSum1 = 0;
    let diagonalSum2 = 0;

    // Summing from left to right
    for (let i = 0; i < arr.length; i++) {
        diagonalSum1 += arr[i][i];
    }

    // Summing from right to left 
    for (let i = 0; i < arr.length; i++) {
        diagonalSum2 += arr[i][arr.length - i - 1];
    }

    return Math.abs(diagonalSum1 - diagonalSum2);
}


