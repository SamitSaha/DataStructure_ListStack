class Helper{
    static precedence(op){
        if(op === '+' || op === '-') return 1;
        if(op === '*' || op === '/') return 2;
        if(op === '^') return 3;
        return 0;
    }
    static isOperator(c){
        return ['+', '-', '*', '/', '^'].includes(c);
    }
}
module.exports = Helper;