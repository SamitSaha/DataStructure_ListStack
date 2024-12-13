// InfixToPostfix.js
const Helper = require('./Helper');

class InfixToPostfix {
    static convert(expression) {
        const stack = [];
        let result = '';
        for (const char of expression) {
            if (char.match(/[a-zA-Z0-9]/)) {
                result += char;
            } else if (char === '(') {
                stack.push(char);
            } else if (char === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    result += stack.pop();
                }
                stack.pop();
            } else if (Helper.isOperator(char)) {
                while (
                    stack.length &&
                    Helper.precedence(stack[stack.length - 1]) >=
                        Helper.precedence(char)
                ) {
                    result += stack.pop();
                }
                stack.push(char);
            }
        }
        while (stack.length) {
            result += stack.pop();
        }
        return result;
    }
}

module.exports = InfixToPostfix;
