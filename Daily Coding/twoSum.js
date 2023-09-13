// Two sum:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var array = [2, 7, 11, 15];
var target = 9;
var result = [];

function twoSum(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(i)
        for (j = i + 1; j < arr.length; j++) {
            console.log(i, arr[i], j, arr[j])
            if (arr[i] + arr[j] == target) {
                // console.log(arr[i], "+", arr[j], "=", target)
            }
        }
    }
}

twoSum(array)


// var twoSum = function (nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i,j]
//             }
//         }
//     }
// };



// function findPairsWithSum(arr, target) {
//     const numToIndex = {};

//     for (let i = 0; i < arr.length; i++) {
//         const complement = target - arr[i];

//         if (numToIndex[complement] !== undefined) {
//             console.log(arr[i], "+", complement, "=", target);
//         }

//         numToIndex[arr[i]] = i;
//     }
// }

// const arr = [2, 3, 7, 8, 5, 10, 8, 3];
// const target = 10;

// findPairsWithSum(arr, target);

// *****************************************************************************

// Object

// const ob = {name: "rahul", 2:35, arr:["age", 18], oj:{ab:"ra", bc:[1,2,4]}}

// console.log(ob.oj.bc[2]);
// console.log(ob.arr[0]);
// console.log(ob.name);


// *****************************************************************************

// var arr = [2,3,7,8,5,10,8,3];
//         // 0,1,2,3,4

// var target = 10;

// for(i = 0; i < arr.length; i++){
//     // console.log(i)
//     for(j = i+1; j<arr.length; j++){
//         // console.log(i, arr[i], j, arr[j])
//         if(arr[i] + arr[j] == target){
//             console.log(arr[i],"+",arr[j], "=", target)
//         }
//     }
// }

// *******************************************************************************

// var - reassign redeclare update kuch bhi kr skte hai..

// var x = 10;
// var y = 4;

// if (9 > 7) {
//     var y = 8;
// }

// console.log(x)
// console.log(y)  //10 8

// var x = 3;
// var x = 7 + 4;
// console.log(x)  //11

// *******************************************************************************

// let -  we can assign but cannot redeclare it..
// let x = 3;
// if(9 > 7){
//     let x = 7;
//     console.log(x)  //7
// }
// console.log(x)   //3

// let x = 3;
// if (4 > 7) {
//     x = 7;
//     console.log(x)  //7
// }
// console.log(x)    //7

// let x = 3;
// let x = 7 + 4;
// console.log(x)     // Identifier 'x' has already been declared


// *******************************************************************************
// const -  cannot reassign kuch bhi ek baar assign hua toh khtam..
// const x = 3;
// if(9 > 7){
//     const x = 7;
// }
// console.log(x)   //3


// const x = 3;
// if (9 > 7) {
//     x = 7;
//     // console.log(x)  //7
// }
// const x = 4;
// console.log(x)  // Identifier 'x' has already been declared

// const x = 3;
// const x = 7 + 4;
// console.log(x)        // Identifier 'x' has already been declared