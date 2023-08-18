// for (starting; ending; sequence) {

// } 

// Q. from 100 print number in descending order...
// for (var i = 100; i >= 50; i = i - 1) {
//     console.log(i)
// }


// **********************************************************************

// Q. from 100 print number which are odd and count of odd in descending order...

// 10 / 2 = 5  Q so in divide "/" this operation quotent value is noticed
//     _5_   -- quotient
// 2 | 11
//     10
//     __
//      1 remainder
// 10 % 2 =   R  so in modulus "%" this operation remiander value is noticed

// in this code if i % 2 == 0 then output is even 
// in this code if i % 2 !== 0 then output is odd
var oddNumber = 0;
var evenNumber = 0;
for (i=27; i>0; i--) {
    // console.log(i)
    if (i % 2 !== 0) {
        console.log(` ${i} - this odd number`)
        oddNumber+=1
    }
    else{
        console.log(` ${i} - this even number`)
        evenNumber+=1 
    }
}

console.log("There are total" , " " , oddNumber,  " " , "odd numbers")
console.log(`There are total ${evenNumber}  even numbers`)


// **********************************************************************



// for (var i = 100; i >= 50; i = i - 1) {
//     console.log(i)
//     if (i == 80) {
//         console.log("We got 80.")
//         break;
//     }
// }



// Q. Find numbers who are even from 35 - 256;

// var start = 35;
// var end = 256;

// for (var i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} - Even Number`)
//     } else {
//         console.log(`${i} - Odd Number`)
//     }
// }


//       _____ 5 - Q
//    2 /  11
//         10
//          1 - R

//          10 / 2 =   Q
//          10 % 2 =   R -> 0 - even 



// Q Find total count from range 123 - 873, who are odd

// var start = 123;
// var end = 873;
// var oddCount = 0;
// var evenCount = 0;

// for (var i = start; i <= end; i++) {
//     if (i % 2 != 0) {
//         // console.log(i)
//         oddCount++;
//     } else {
//         evenCount++;
//     }
// }

// console.log(oddCount, "Total odd numbers")
// console.log(evenCount, "Total even numbers")


// Q Find out addition of first 10 natural numbers who are even ...

// var result = 0;

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         result = result + i;
//     }
// }

// console.log(result);



// Q Find the Factorial..  1 * 2 * 3 *4 * 5 * 6 * 7 * 8 * 9 * 10 * 11 *  12

// var number = 3;
// var result = 1;

// for (var i = 2; i <= number; i++) {
//     result = result * i;
// }
// console.log(result)


// var number = 5;
// var result ;

// for (var i = 1; i <= number; i++) {
//     if (result == undefined) {
//         result = i;
//     } else {
//         result = result * i;
//     }
// }
// console.log(result)




// Q Table - 

// var number = 23;


