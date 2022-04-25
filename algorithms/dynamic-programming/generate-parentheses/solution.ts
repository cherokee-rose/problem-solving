/* 
  https://leetcode.com/problems/generate-parentheses/
  https://github.com/cherokee-rose

  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

  Example 1:
    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]

  Example 2:
    Input: n = 1
    Output: ["()"]

  Constraints:
    * 1 <= n <= 8
*/

function generateParenthesis(n: number): string[] {
  let generated: string[] = [];

  function generate(opened: number, closed: number, current: string) {
    if (opened === 0 && closed === 0) {
      generated.push(current);
      return;
    }

    if (opened > 0) {
      generate(opened - 1, closed, current + "(");
    }

    if (opened < closed) {
      generate(opened, closed - 1, current + ")");
    }
  }

  generate(n, n, "");

  return generated;
}
