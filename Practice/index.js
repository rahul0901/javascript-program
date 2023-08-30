// Q1). array of string and return new array containing length of those strings..

// var arr = ['gjabcla','hvobauvao','abvajb','vboa','hoss'];
// var newArr = [];

// function newArray(array){
//     for(var i = 0; i<array.length; i++){
//         // console.log(i,' ',array[i].length)
//         // newArr.push(array[i].length)
//         newArr.push(`${array[i]} length --> ${array[i].length}`)
//         // return (i,' ', i.length)
//     }
// }

// newArray(arr);
// console.log(newArr)

// **************************************************************************

// Q2). array of number as input return new array with only even numbers from source/orginal array..

// var arr = [34,563,4662,577,487,28,9,1656,96,3427,9,9897,56,22,35,1,34,5,6,7,8,879,90,23,56,43,52,78,20];
// var newArrEven = [];
// console.log("before loop intial array", arr)

// function evenNumbers(aree){
//     for (var i = 0; i< aree.length; i++){
//         if(i % 2 == 0){
//             newArrEven.push(aree[i])
//         }
//     }
// }

// evenNumbers(arr);
// console.log(newArrEven)

// **************************************************************************
// Q3). array of number as input return smallest no' from array..my addition to code is return new array with numbers in descending order..
var arr = [34, 563, 4662, 577, 487, 28, 9, 1656, 96, 3427, 9, 9897, 56, 22, 35, 34, 5, 6, 7, 8, 879, 90, 23, 56, 43, 52, 78, 20];
// var newArrDescending = [];
var smallNo = arr[0];

// var smallNumber

function findSmall(small) {
    for (var i = 1; i < small.length; i++) {
        if (small[i] < smallNo) {
           smallNo = small[i]
        }
    }
    return smallNo
}

// findSmall(arr); ...nai likha toh bhi chlega console mai hi assign krkste hai
console.log(findSmall(arr))

// **************************************************************************

