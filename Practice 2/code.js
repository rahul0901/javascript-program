// // two sum..

// var num = [11, 15, 3, 25, 76, 6];
// var target = 9;
// function findTwoSum(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         // console.log(i)
//         for (var j = i + 1; j < arr.length; j++) {
//             // console.log(i, arr[i],j , arr[j], arr[i] + arr[j])
//             if (arr[i] + arr[j] == target) {
//                 // console.log(arr[i], arr[j])
//                 // newArr.push(arr[i], arr[j])
//                 return [i, j]
//                 // return newArr;
//             }
//         }
//     }
// }
// // findTwoSum(num)
// console.log(findTwoSum(num));

// ----------------------------------------------------------------------

// Palindrome

// var x = 123421;  //5
// // var x = 12345321;  //
// //01234567 
// function findPalin(n) {
//     var str = n.toString()
//     // console.log(str.length / 2)  //2.5
//     for (var i = 0; i < str.length / 2; i++) {
//         // console.log(i, str[i])  //1234
//         // console.log(str[i], str[str.length-1-i])
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false
//         }
//         return true
//     }
// }
// // findPalin(x)
// console.log(findPalin(x))

// var array = [2, 2, 3, 3, 4, 5, 6, 7, 7];

// function removeDuplicate(n) {
//     var newArr = [];
//     var finalArray = [];
//     for (var i = 0; i < n.length; i++) {
//         newArr.push(n[i])
//     }


//     for (var i = 0; i < n.length; i++) {
//         for (j = 0; j < newArr.length; j++) {
//             if (n[i] !== newArr[j]) {
//                 finalArray.push(n[j])
//             }
//         }
//     }

//     return finalArray;

//     // function newArrayRemove(n, newArr){
//     //     var finalArray = [];
//     //     for(var i = 0; i< n.length; i++){
//     //         for(j = 0; j<newArr.length; j++){
//     //             if(n[i] !== newArr[j]){
//     //                 finalArray.push(newArr[j])
//     //             }
//     //         }
//     //     }

//     // }

//     // newArrayRemove(n,newArr)

// }

// // removeDuplicate(array)
// console.log(removeDuplicate(array))


// var x = 123;
// // console.log(x.length)

// var newX = x.toString();
// var finalX = '';
// for( var i = newX.length-1; i>=0; i--){
//     // console.log(newX[i])
//     // console.log(typeof(newX[i]))
//     // finalX = finalX + newX[i].toString();
//     // return finalX;
// }

// console.log(finalX)


// --------------------------------------------------------------------

// var x = "123";

// for( var i = x.length-1; i>=0; i--){
//     console.log(x[i])
// }
