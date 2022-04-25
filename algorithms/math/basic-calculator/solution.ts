/* 
    https://leetcode.com/problems/basic-calculator-ii/
    https://github.com/cherokee-rose
    
    Given a string s which represents an expression, evaluate this expression and return its value. 
    The integer division should truncate toward zero.
    You may assume that the given expression is always valid. All intermediate results will be in the range of [-2^31, 2^31 - 1].
    Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

    Constraints:
        * 1 <= s.length <= 3 * 10^5
        * s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
        * s represents a valid expression.
        * All the integers in the expression are non-negative integers in the range [0, 2^31 - 1].
        * The answer is guaranteed to fit in a 32-bit integer.
*/      

function calculate(s: string): number {
    const evalExpr: { [index: string]: (a: number, b: number) => number } = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => Math.trunc(a / b),
        '*': (a, b) => a * b,
    }
    
    let trimmedArr: string[] = s.trim().split(/(?<=\d+)\s*(?=[+|\-|*|/])|(?<=[+|\-|*|/])\s*(?=\d+)/);
    let result: number = Number(trimmedArr[0]);

    let currNumber: number = 0;
    let [lastOperator, nextOperator]: string[] = ['', ''];

    for (let i = 2; i < trimmedArr.length; i += 2) {
        currNumber = Number(trimmedArr[i]);
        lastOperator = trimmedArr[i - 1];

        if (i < trimmedArr.length - 1) {
            nextOperator = trimmedArr[i + 1];
        }

        if (['+', '-'].includes(lastOperator) && ['*', '/'].includes(nextOperator)) {
            i += 2;
            while(i < trimmedArr.length && !['+', '-'].includes(trimmedArr[i - 1])) {
                currNumber = evalExpr[trimmedArr[i - 1]](currNumber, Number(trimmedArr[i]));
                i += 2;
            }
            i -= 2;
        } 

        result = evalExpr[lastOperator](result, currNumber);
        nextOperator = '';
    }   
    
    return result;
};
