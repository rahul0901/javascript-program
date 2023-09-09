//Array..

// Array.of() -- If you need your output in array format..
// arr = [3, 5, 6, 8, 9]
// // 0  1  2  3  4

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(Array.of(arr[i]))
//     }

// }

// console.log(Array.of("abc", 4, true, 9.23));

// ************************************************************************************
// .push() method 

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count)   // 4
// console.log(animals)  
// [ 'pigs', 'goats', 'sheep', 'cows' ]


// animals.push("hens", "tigers")
// console.log(animals)
// [ 'pigs', 'goats', 'sheep', 'cows', 'hens', 'tigers' ]
// ************************************************************************************
// .pop() method 
 
// const animals = ['pigs', 'goats', 'sheep'];

// console.log(animals.pop())  //sheep
// console.log(animals)       //[ 'pigs', 'goats' ]

// *******************************************************************************
// The forEach method is used to iterate over each element of an array and perform a specified operation or function on each element. It does not create a new array but instead modifies the original array in place.

// arr = [3, 5, 6, 8, 9]
// // // 0  1  2  3  4

// arr.forEach(function (num, ind) {
//     num*=2; 
//     console.log(`in loop ${num} at index ${ind}`)
// });
// console.log(arr)
// *******************************************************************************

// arr = [3, 5, 6, 8, 9]

// const newArr = arr.map(function(rahul){
//     return rahul*2;
// })

// console.log(newArr)     //[ 6, 10, 12, 16, 18 ]

// arr = [3, 5, 6, 8, 9];
// arr.map(function(rahul){
//         return rahul*2;
//     })
// console.log(arr)   //[ 3, 5, 6, 8, 9 ]