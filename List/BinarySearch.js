const { read } = require('fs');
const readline = require('readline');

class BinarySearch{
    constructor(array, target){
        this.array = array; // take array elements to search.
        this.target = target; // element to search for.
    }

    // Method to perform BINARY SEARCH
    search() {
        let left = 0;
        let right = this.array.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2); // Calculate mid-point

            if (this.array[mid] === this.target) {
                return mid; // Return index if found
            }
            if (this.array[mid] < this.target) {
                left = mid + 1; // Move the left boundary
            } else {
                right = mid - 1; // Move the right boundary
            }
        }

        return -1; // Return -1 if not found
    }

    // Static method to take input from the user.
    static async getInput(){
        const r1 = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        const question = (query) => new Promise((resolve) => r1.question(query, resolve));
        try{
            const arrayInput = await question("Enter elements of the array: ");
            const array = arrayInput.split(" ").map(Number);
            const target = await question("Enter the element you want to search: ");
            r1.close();
            return { array, target: Number(target)};
        } catch(error){
            console.error("Error with taking input: ", error);
            r1.close();
            process.exit(1);
        }
    }
}

// Main function
(async function main(){
    try{
        const {array, target} = await BinarySearch.getInput();
        const sortedArray = array.sort((a,b) => a-b); // sorting the array. 
        const binarySearch = new BinarySearch(sortedArray, target);
        const result = binarySearch.search();
        if (result !== -1) {
            console.log(`Element found at index: ${result}`);
        } else {
            console.log("Element not found in the array.");
        }
    }catch (error) {
        console.error("An error occurred:", error);
    }
})();