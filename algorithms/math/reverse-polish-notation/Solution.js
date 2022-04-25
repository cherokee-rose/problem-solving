/* 
    https://leetcode.com/problems/evaluate-reverse-polish-notation/
    https://github.com/cherokee-rose

    Evaluate the value of an arithmetic expression in Reverse Polish Notation.
    Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

    Note that division between two integers should truncate toward zero.
    It is guaranteed that the given RPN expression is always valid. 
    That means the expression would always evaluate to a result, and there will not be any division by zero operation.

    Example:
        Input: tokens = ["2","1","+","3","*"]
        Output: 9
        Explanation: ((2 + 1) * 3) = 9

    Constraints:
        * 1 <= tokens.length <= 10^4
        * tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    let stack = [];
    let a, b;
    let evalExpr = {
        '+': () => a + b,
        '-': () => a - b,
        '*': () => a * b,
        '/': () => Math.trunc(a / b),
    };
    let isOperator = (token) => token == '+' || token == '-' || token == '*' || token == '/';

    for (let i = 0; i < tokens.length; i++) {
        if (isOperator(tokens[i])) {
            b = stack.pop();
            a = stack.pop();
            stack.push(evalExpr[tokens[i]]());
        } else {
            stack.push(Number(tokens[i]));
        }
    }

    return stack.pop();
};
