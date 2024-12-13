// main.js
const InfixToPrefix = require('./InfixToPrefix');
const InfixToPostfix = require('./InfixToPostfix');
const PrefixToInfix = require('./PrefixToInfix');
const PostfixToInfix = require('./PostfixToInfix');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function getInput(prompt) {
    return new Promise((resolve) => {
        readline.question(prompt, resolve);
    });
}

async function main() {
    while (true) {
        console.log('\nChoose an operation:');
        console.log('1. Infix to Prefix');
        console.log('2. Infix to Postfix');
        console.log('3. Prefix to Infix');
        console.log('4. Postfix to Infix');
        console.log('5. Exit');

        const choice = await getInput('Enter your choice: ');
        switch (choice) {
            case '1': {
                const infix = await getInput('Enter Infix Expression: ');
                console.log('Prefix:', InfixToPrefix.convert(infix));
                break;
            }
            case '2': {
                const infix = await getInput('Enter Infix Expression: ');
                console.log('Postfix:', InfixToPostfix.convert(infix));
                break;
            }
            case '3': {
                const prefix = await getInput('Enter Prefix Expression: ');
                console.log('Infix:', PrefixToInfix.convert(prefix));
                break;
            }
            case '4': {
                const postfix = await getInput('Enter Postfix Expression: ');
                console.log('Infix:', PostfixToInfix.convert(postfix));
                break;
            }
            case '5':
                console.log('Exiting...');
                readline.close();
                return;
            default:
                console.log('Invalid choice. Try again.');
        }
    }
}

main();
