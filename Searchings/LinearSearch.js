const readline = require('readline');

class LinearSearch{
    constructor(array, target){
        this.array = array; // the array of the element. 
        this.target = target; // the value i am searching for. 
    }
    // Method to perform linear search
    search(){
        for(let i=0; i<this.array.length; i++){
            if(this.array[i] === this.target){ // check if the current element matches the target. 
                return i; // return index if found
            }
        }
        return -1; // return -1 if not found the target.
    }
    //static method to take input from the user. 
    static async getInput(){
        // a readline interface to handle user input
        const r1 = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        // Define a helper function question, which wraps the r1.question() function in a promise. 
        // This makes it possible to wait for user input using await.
        const question = (query) => new Promise((resolve) => r1.question(query, resolve));

        try{
            // Prompt user to take array inputs in array. 
            const arrayInput = await question("Enter elements of the array: ");
            const array = arrayInput.split(" ").map(Number) // Convert input to an array of numbers.             
            const target = await question("Enter the element to search for: "); // Prompt user for target element to find in array.
            r1.close(); // close the readline interface.
            return {array, target: Number(target)};
        } catch (error) {
            console.error("Error while taking input:", error); // print error. 
            rl.close(); // close the readline.
            process.exit(1); // exit the program.
        }
    }
}
// Main function to run the program
(async function main(){
    try{        
        const {array, target} = await LinearSearch.getInput(); // Take input from the user        
        const linearSearch = new LinearSearch(array, target); // Create an instance of the LinearSearch class        
        const result = linearSearch.search(); // Perform the search
        // Display the result
        if(result !== -1){
            console.log(`Element found at index: ${result}`);
        } else{
            console.log("Element not found in the array.");
        }
    } catch(error){
        console.log("An error occurred:", error);
    }
})();