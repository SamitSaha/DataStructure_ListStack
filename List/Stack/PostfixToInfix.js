// PostfixToInfix.js
const Helper = require('./Helper');

class PostfixToInfix {
    static convert(expression) {
        const stack = [];
        for (const char of expression) {
            if (Helper.isOperator(char)) {
                const operand2 = stack.pop();
                const operand1 = stack.pop();
                const subExpr = `(${operand1}${char}${operand2})`;
                stack.push(subExpr);
            } else {
                stack.push(char);
            }
        }
        return stack[0];
    }
}

module.exports = PostfixToInfix;