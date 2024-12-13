// ---------------------------------------------------------------------------------------------
// ----------------------------- MERGE SORT METHOD --------------------------------------------

function merge(arr, left, mid, right){
    const n1 = mid - left + 1; // n1 is the length of the left subarray.
    const n2 = right - mid;   // n2 is the length of the right subarray.

    // Create temporary arrays
    const L = new Array(n1);
    const R = new Array(n2);

    // Copy Data to temporary arrays L[] and R[]
    for(let i=0; i<n1; i++)
        L[i] = arr[left + i];
    for(let j=0; j<n2; j++)
        R[j] = arr[mid + 1 + j];

    let i=0, j=0, k=left;

    // Merge the temp arrays back into arr[left .... right]
    while(i<n1 && j<n2){
        if(L[i] <= R[j]){
            arr[k++] = L[i++];
        } else{
            arr[k++] = R[j++];
        }  
    }

    // Copy the remaining elements of L[] to arr[] if any remains.
    while(i < n1){
        arr[k++] = L[i++];
    } 

    // Copy the remaining elements of R[] to arr[] if any remains.
    while(j < n2){
        arr[k++] = R[j++];
    }
}

function mergeSort(arr, left, right) {
    if(left >= right) return;

    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

// ---------------------------------------------------------------------------------------------
// ----------------------------- QUICK SORT METHOD --------------------------------------------

function partition(arr, low, high){

    let pivot = arr[high]; // choose the last elemet as a pivot. 

    let i = low-1;  // idex of the smallest element and indicates the right position of pivot found so far.

    for(let j=low; j<= high-1; j++){
        if(arr[j] < pivot){
            i++; 
            swap(arr, i, j);
        }
    }

    swap(arr, i+1, high);
    return i+1;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// The quick sort function implementation
function quickSort(arr, low, high){
    if(low < high){
        // pi is the partition return index of pivot
        let pi = partition(arr, low, high);

        // recurtion call for smaller elements  and greater or equal elements. 
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}


// ---------------------------------------------------------------------------------------------
// ----------------------------- RADIX SORT METHOD ---------------------------------------------

// A utility function to get maximum value in arr[]
function getMax(arr){
    const length = arr.length;
    let mx = arr[0];
    for(let i=1; i<length; i++){
        if(arr[i] > mx)
            mx = arr[i];
    }
    return mx;
}

// A function to do counting sort of arr[] according to the digit represented by exp.
function countSort(arr, exp){
    const length = arr.length;
    let output = Array(length) // the main output array
    let count = Array(10).fill(0,0);

    //Store count of occurrences in count[]
    for(let i=0; i<length; i++){
        const digit = Math.floor(arr[i]/exp)%10;
        count[digit]++;
    }

    //Change count[i] so that count[i] now contains actual position of this digit in output[]
    for(let i=1; i<10; i++){
        count[i] += count[i-1];
    }

    // Build the output array
    for(let i=length-1; i>=0; i--){
        const digit = Math.floor(arr[i]/exp)%10;
        output[count[digit]-1] = arr[i];
        count[digit]--;
    }
    return output;
}

//  The Main Function to that sorts arr[] using Radix Sort
function radixSort(arr){
    //  Find the maxium number to know number of digits
    const maxNUmber = getMax(arr);
    //  Create a shallow copy where the sorted values will be kept
    let sortedARR = [...arr];
    //  counting sort for every digit. Note that instead of passing digit number, exp is passed.
    //  exp is 10^i where i is current digit number. 
    for(let exp = 1; Math.floor(maxNUmber / exp) > 0; exp *= 10){
        // Get the Count sort iteration
        const sortedIteration = countSort(sortedARR, exp);
        sortedARR = sortedIteration;
    }
    return sortedARR;
}


// ---------------------------------------------------------------------------------------------
// -------------------------------- COUNT METHOD -----------------------------------------------

function countSort(inputArray) {
    const N = inputArray.length;

    // Finding the maximum element of inputArray
    let M = 0;
    for (let i = 0; i < N; i++) {
        M = Math.max(M, inputArray[i]);
    }

    // Initializing countArray with 0
    const countArray = new Array(M + 1).fill(0);

    // Mapping each element of inputArray as an index of countArray
    for (let i = 0; i < N; i++) {
        countArray[inputArray[i]]++;
    }

    // Calculating prefix sum at every index of countArray
    for (let i = 1; i <= M; i++) {
        countArray[i] += countArray[i - 1];
    }

    // Creating outputArray from countArray
    const outputArray = new Array(N);
    for (let i = N - 1; i >= 0; i--) {
        outputArray[countArray[inputArray[i]] - 1] = inputArray[i];
        countArray[inputArray[i]]--;
    }

    return outputArray;
}

// ---------------------------------------------------------------------------------------------
// -------------------------------- PRINT METHOD -----------------------------------------------

function printArray(arr, sortMethod){
    console.log(`Sorted Array using ${sortMethod.toUpperCase()} sort is: ${arr.join(" ")}`);
}

// ---------------------------------------------------------------------------------------------
// --------------------------------- SORTING METHOD --------------------------------------------

function sortArray(){
    // Take array size and convert into integer. 
    let arrSize = prompt("Enter the number of array size ");
    let arraySize = parseInt(arrSize);

    // Take array inputs and convert into integers. 
    let arr = [];
    for(let i=0; i<arraySize; i++){
        let num = prompt(`Enter the values ${i+1} : `);
        arr.push(parseInt(num));
    }

    // Ask user which sorting method to use for sorting. 
    let sortMethod = prompt("which sorting method would you like to use one between 'merge', 'quick' or 'radix' sort ? ");

    // Match the sorting name and calling the method and sort the array.
    switch(sortMethod.toLowerCase()){
        case "merge":
            mergeSort(arr, 0, arr.length-1);
            printArray(arr, sortMethod);
            break;
        case "quick":
            quickSort(arr, 0, arr.length-1);
            printArray(arr, sortMethod);
            break;
        case "radix":
            a = radixSort(arr);
            printArray(a, sortMethod);
            break;
        case "count":
            b = countSort(arr);
            printArray(b, sortMethod);
            break;
        default:
            console.log("Invalid sorting method. Please choose 'merge', 'quick' or 'radix' sort.");
    }
}

// Call the function to run the program
sortArray();