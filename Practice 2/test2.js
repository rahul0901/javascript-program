// Q1)
// var arr = [2, 4, 5, 7, 8, 9];
// var origin = arr[0];
// var newArray = [];

// function sumOfAllElements(array) {
//     for (var i = 1; i < array.length; i++) {
//         origin+=array[i]
//         // newArray.push(origin + array[i])
//     }
//     return origin
// }

// console.log(sumOfAllElements(arr))

// *********************************************************************
// Q2)
// var arr = [2, 4, 5, 7, 8, 9, 14];
// var max = arr[0];

// function findMax(array){
//     for (var i = 1; i<array.length; i++){
//         // console.log(array[i])
//         if(max < array[i]){  //...2< 4
//             max = array[i]
//         }
//     }

//     return max
// }
// console.log(findMax(arr))



// if(2<4){
//     console.log("hi")
// }

// *********************************************************************
// Q5)
// var arr = [2, 4, 5, 7, 8, 9, 6, 10, 14];
// var evenArray = [];
// var evenCount = 0;

// function countEven(array){
//     for (var i = 0; i<array.length; i++){
//         if (array[i] % 2 == 0){
//             evenArray.push(array[i])
//             // console.log(array[i])
//             // console.log(evenArray)
//         }
//     }
//     evenCount += evenArray.length;
//     return evenCount
// }

// console.log(countEven(arr))

// *********************************************************************
//Q3)
// var no = [2, 4, 5, 7, 8]  //..26
// var no = [1,2,3,4,5,6,7,8]   //..36
// var avg = 0;

// function findAvg(array) {
//     for (var i = 0; i < no.length; i++) {
//         avg += no[i];
//     }
//     avg = avg/no.length;
//     return avg
// }

// console.log(findAvg(no))


// for (var i = 0; i<no.length; i++){
//     avg+= no[i];
// }

// console.log(avg/no.length)

// *********************************************************************

// Q4) reverse

// var arr = [2, 4, 5, 7];  //, 8, 9, 6, 10

// // for (var i = arr.length; i>=0; i--){
// //     console.log(arr[i])
// // }

// function arrayReverse(array){
//     var newarr = [];
//     for (var i = array.length; i >= 0; i--){
//         newarr.push(array[i])
//     }
//     return newarr
// }

// console.log(arrayReverse(arr))

// *********************************************************************

// var arr = [2,3,4,5,6];

// function findPrime(array){
//     var allPrime = [];
//     for(var i = 0; i<array.length; i++){
//         if(array[i] % 1 == 0 && array[i] % array[i] == 0){
//             allPrime.push(array[i]);
//         }
//     }
//     return allPrime
// }

// console.log(findPrime(arr))


var arr = [2, 3, 4, 5, 6]

for (var i = 0; i < arr.length; i++) {
    var allPrime = [];
    if (arr[i] % 1 == 0) {
        console.log(arr[i])
        // allPrime.push(arr[i]);
    }
}

console.log(allPrime)

