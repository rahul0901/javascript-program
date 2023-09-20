// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// solution: 

// var num = [2, 7, 11, 15, 2];
// var num = [11, 15, 3, 25, 76, 6]
var num = [3, 5, 4, 2];
var target = 6;
function twoSum(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum(num));

// -------------------------------------------------------------------
// Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// var x = 1234321;  //length is 7 which is 0 to 6
// // var str = x.toString();
// // console.log(str.length)
// // console.log(str.length-1, str[str.length-1])
// var isPalindrome = function (x) {
//     // console.log(x.length)
//     var str = x.toString();
//     for (var i = 0; i < str.length / 2; i++) {
//         console.log(str[i], i)
//     }
// };

// console.log(isPalindrome())

// -------------------------------------------------------------------
// var num = 10;
// var num = 4;
// // var num = 0;

// function starPattern(n){
//     for(var i = 0; i<n; i++){
//         var pattern = "";
//         for (var j = 0; j<i+1; j++){
//             pattern+="*";
//         }
//         console.log(pattern)
//     }
// }

// starPattern(num)


// var num = 3;

// function starPattern(n){
//     for(var i = 0; i<n; i++){
//         var pattern = "";
//         for (var j = i+1; j<n; j++){
//             pattern+="*";
//         }
//         console.log(pattern)
//     }
// }

// starPattern(num)

// var num = 3;
// // var num = 5;
// // var num = 6;

// function findFactorial(n){
//     var factoraialOfNumber = 1;
//     for(var i = n; i>=1; i--){
//         // console.log(i)
//         factoraialOfNumber= factoraialOfNumber * i;
//     }
//     return (`factorial of ${num} is ${factoraialOfNumber}`);
// }

// console.log(findFactorial(num))


// FIbonacci Series..
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...


// var number = 8;
// function findFibonacci(n) {
//     var num = [0, 1];
//     for (var i = 2; i < n; i++) {
//         var newValue = num[i - 1] + num[i - 2];
//         num.push(newValue);
//     }
//     return num;
// }

// console.log(findFibonacci(number))

// var num = 5;
// var arr = [0,1];

// for(var i = 2; i<num; i++){
//     var newVal = arr[i-1] + arr[i-2];
//     console.log(newVal)
//     arr.push(newVal);
// }

// console.log(arr)

// var string = "abcba"

// for (var i = 0; i<(string.length/2);i++){
//     // console.log(i, string[i])
//     if(string[i])
// }