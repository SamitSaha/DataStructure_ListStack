// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

const prompt = require('prompt-sync')({sigint: true});

// Bubble Sort
function bubbleSort(arr, len) {

    for (let i = 0; i < len; i++) {
        // i elements are placed.
        for (let j = 0; j < len - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                // swaping element. smal vs large. 
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Insertion Sort
function insertionSort(arr, len) {

    for (let i = 1; i < len; i++) {
        let k = arr[i];
        let j = i - 1;
        // loop works from 0 to i-1 index and greater than k.
        while (j >= 0 && arr[j] > k) {
            // swap between next one position and current position. small vs large 
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = k;
    }
    return arr;
}
// Selection Sort
function selectionSort(arr, len) {
    for (let i = 0; i < len - 1; i++) {
        let min = i;
        // checking min element and store it. 
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // Swap the minimum element with the first element
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

// take input from user and do sortings.

// Main function to run the program
// function sortArray() {
//     readline.question("Enter the number of elements in the array (max 20): ", (size) => {
//         size = parseInt(size);

//         if (size > 20 || size < 1) {
//             console.log("Please enter a valid array size (1-20).");
//             readline.close();
//             return;
//         }

//         let arr = [];
//         const getArrayElements = (i) => {
//             if (i < size) {
//                 readline.question(`Enter element ${i + 1}: `, (num) => {
//                     arr.push(parseInt(num));
//                     getArrayElements(i + 1);
//                 });
//             } else {
//                 readline.question("Which sorting method would you like to use? (bubble, insertion, selection): ", (sortMethod) => {
//                     switch (sortMethod.toLowerCase()) {
//                         case "bubble":
//                             arr = bubbleSort(arr);
//                             console.log("Sorted array using Bubble Sort:", arr);
//                             break;
//                         case "insertion":
//                             arr = insertionSort(arr);
//                             console.log("Sorted array using Insertion Sort:", arr);
//                             break;
//                         case "selection":
//                             arr = selectionSort(arr);
//                             console.log("Sorted array using Selection Sort:", arr);
//                             break;
//                         default:
//                             console.log("Invalid sorting method. Please choose 'bubble', 'insertion', or 'selection'.");
//                     }
//                     readline.close();
//                 });
//             }
//         };

//         getArrayElements(0);
//     });
// }

function sortArray(){
    // Take array size  and convert into integer.
    let arrSize = prompt("Enter the number of array size");
    let arraySize = parseInt(arrSize);

    // take array inputs and convert into integers.
    let arr = [];
    for (let i=0; i<arraySize; i++){
        let num = prompt(`Enter element ${i+1}:`);
        arr.push(parseInt(num));
    }

    // Ask user which sorting method to use
    let sortMethod = prompt("Which sorting method would you like to use one between 'bubble', 'insertion' or 'selection' sort ?");

    // Match the string and calling the method and sort the array. 
    switch(sortMethod.toLowerCase()){
        case "bubble":
            arr = bubbleSort(arr, arraySize);
            console.log("Sorted Array using Bubble Sort is ", arr);
            break;

        case "insertion":
            arr = insertionSort(arr, arraySize);
            console.log("Sorted array using Insertion Sort is ", arr);
            break;

        case "selection":
            arr = selectionSort(arr, arraySize);
            console.log("Sorted array using Selection Sort is ", arr);
            break;

        default:
            console.log("Invalid sorting method. Please choose 'bubble', 'insertion', or 'selection'.");
    }
}

// Call the function to run the program
sortArray();














