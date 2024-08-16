// let size=prompt("enter size:")
// console.log("size:", size)
// let array=[];
// let element;

// //taking input
// for (let i= 0; i<size; i++){
//     element = prompt("enter input");
//     array.push(parseInt(element)); // Add each element to the array
//     // array[i]=element;
//     // console.log("element", element);
// }
// //printing elements
// // console.log("array[element] are:")
// for (let index = 0; index <size; index++) {
//     console.log(array[index], ' ');
// }

// //sorting
// for (let i = 1; i<size; i++) {
//     for(let j=0;j<size;j++){
//         if(array[i]>array[j]){
//             let temp=array[i];
//             array[i]=array[j];
//             array[j]=temp;
//         }
//     }
//     console.log("sorted elements are:");
//     console.log(array[i]);
    
// }

// Bubble Sort implementation in JavaScript

function bubbleSort(array) {
    let n = array.length;
    let swapped;

    // Outer loop to iterate over the array
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        // Inner loop for comparing and swapping elements
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }

        // If no elements were swapped, the array is sorted
        if (!swapped) break;
    }
    
    return array;
}

// Example usage:
let size = prompt("Enter size:");
let array = [];

// Taking input
for (let i = 0; i < size; i++) {
    let element = prompt("Enter input");
    array.push(parseInt(element)); // Convert input to an integer and add to array
}

// Sorting the array
let sortedArray = bubbleSort(array);

// Printing the sorted array
console.log("Sorted array:", sortedArray);
