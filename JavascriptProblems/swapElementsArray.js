// I want to swap every two elements of below array and provide new swapped array..
// I/O :  
var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];  //8 --> 0 - 7
var newArr = [];
// o/p: newArr = [3,2,5,4,7,6,9,8];

for (var i = 0; i < arr.length; i += 2) {
    // console.log(i, arr[i])
    if (i + 1 < arr.length) {
        newArr.push(arr[i + 1], arr[i]);
    }
    else {
        newArr.push(arr[i])
    }
}

console.log(newArr)

// -----------------------------------------------------------------------------

// var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10,11];
// var newArr = [arr[0]];
// // o/p: [2, 4, 3, 6, 5, 8, 7, 10, 9, 11]

// for (var i = 1; i < arr.length; i += 2) {
//     if (i + 1 < arr.length) {
//         newArr.push(arr[i + 1], arr[i])
//     }

//     else {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)