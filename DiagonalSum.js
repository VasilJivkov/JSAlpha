let sum1 = 0;
let sum2 = 0;

let matrix = [
    [1,2,3,4,5],
    [2,1,4,5,6],
    [3,4,1,6,7],
    [4,5,6,1,8],
    [5,6,7,8,1],
];

// Task 1. Sum the numbers above the diagonal of 1s
    for (let i = 0; i < matrix.length; i++) {
       let row = matrix[i];

        // splice each row at the i index +1 (because we don't want the diagonal values)
        // , to filter out only the numbers we need, into a new "arr" array.
        let arr;
        arr = row.splice(i+1);

        // sum all the elements of the new arr
        for( let element of arr){
            sum1 += element;
        }
        console.log(arr);
    }
    console.log("Sum above diagonal = " + sum1);

// Task 2. Sum the numbers below the diagonal
    console.log(matrix);
    // splice the whole matrix leaving only the part we need to sum
    let arrBelowD = [].concat(...matrix);

    //sum the numbers of new array;
    sum2 = arrBelowD.reduce((a, b) => a + b, 0);

    console.log("Below the diagonal = " + sum2);


    // for (let i = 0; i < matrix.length; i++) {
    //     let row = matrix[i];
    //     let arr;
    //     // this time we splice on index
    //     arr = row.slice(i);
    //     console.log(arr);
    // }

    // flatten the matrix to get all the numbers into a single array
