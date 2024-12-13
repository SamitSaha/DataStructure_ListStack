// PrefixToInfix.js
const Helper = require('./Helper');

class PrefixToInfix {
    static convert(expression) {
        const stack = [];
        for (let i = expression.length - 1; i >= 0; i--) {
            const char = expression[i];
            if (Helper.isOperator(char)) {
                const operand1 = stack.pop();
                const operand2 = stack.pop();
                const subExpr = `(${operand1}${char}${operand2})`;
                stack.push(subExpr);
            } else {
                stack.push(char);
            }
        }
        return stack[0];
    }
}

module.exports = PrefixToInfix;
