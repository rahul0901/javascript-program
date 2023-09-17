// Create a program that prints the following pattern using asterisks (*) using for loops:
// Input - 5 
// Output -
// *
// **
// *
// **

// var num = 4;
// function allstar(no) {
//     for (var i = 1; i <= no-1; i++) {
//         // console.log(i* "$")
//         console.log("$")
//         for (var j = i+1; j <= no; j++) {
//             console.log(j)
//         }
//     }
// }
// console.log(allstar(num))

// **********************************************************

// var input  = 4;

// function allstars(no){
//     for (var i = 1; i<= no; i++){
//         var pattern = '';
//         for (var j = 1; j<=i; j++){
//             pattern += "*"
//         }
//         console.log(pattern)
//     }
// }

// console.log(allstars(input))

// **********************************************************

// var string = "racecar"
// //0123456
// // console.log(string.length)

// // console.log(string.length-1) 

// // console.log(string[2])

// function findPalindrome(str) {
//     // var reversed = '';
//     for (var i = str.length - 1; i >= 0; i--) {  //6<7
//         console.log(str[i], i)
//     }
// }

// console.log(findPalindrome(string))


// ********************************************************************
// // Question 1: Pattern Printing
// // Create a program that prints the following pattern using asterisks (*) using for loops:
// // Input - 5
// // Output -
// // *
// // **
// // ***
// // ****
// // *****

// var input = 5;

// function printStars(number) {

//     for (var i = 1; i <= number; i++) { // 0 - 4, 0 1 2 3 4 - 5 times
//         var pattern = ""
//         for (var j = 1; j <= i; j++) { // 5 5 5 5 5
//             pattern = pattern + "*"
//         }
//         console.log(pattern)
//     }

// }
// printStars(input)


// Q.2.1
// var string = "abcba";


// str[0] = "a"
// str[str.length - 1 ] = "a"
// str[str.length - 1 -  1] = "b"
// str[str.length - 1 - 2] = "c"

// strp[1] = "b"
// str[str.length - 4] = "b"

// function checkP(str) {
//     if(str.length < 2){
//         return "Str not valid"
//     }

//     for (var i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false
//         }
//     }
//     return true

// }

// console.log(checkP(string))


// Q.2.2
// var string = "aa";

// function checkP(str) {

//     var flag = false;
//     for (var i = 0; (i < str.length / 2) && (str.length > 1); i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false
//         }
//         flag = true
//     }
//     return flag

// }

// console.log(checkP(string))

var x = 123;
// console.log(x.length)

var newX = x.toString();
var finalX = '';
for( var i = newX.length-1; i>=0; i--){
    // console.log(newX[i])
    // console.log(typeof(newX[i]))
    finalX = finalX + newX[i].toString();
    // return finalX;
}

console.log(finalX)