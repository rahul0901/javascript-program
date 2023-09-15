// Addition of 2,n,m,

// var first = 2;
// var second = 3;
// function solveMeFirst(a, b) {
//     //   var sum = a+b;
//     return a + b;
//     // return sum;
// }
// console.log(solveMeFirst(first, second));

// -----------------------------------------------------------------------------

// add all elements of array --
// function simpleArraySum(ar) {
//     var res = 0;
//     for (var i = 0; i < ar.length; i++) {
//         // console.log(i)
//         res = res + ar[i];
//     }
//     return res;
// }

// var array = [1, 2, 3, 4, 10, 11];

// console.log(simpleArraySum(array))

// -----------------------------------------------------------------------------

function compareTriplets(a, b) {
    var alice = 0;
    var bob = 0;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < i + 1; j++) {
            if (a[i] < b[j]) {
                bob= bob+1;
            }
            else if (a[i] > b[j]){
                alice = alice+1;
            }
            else {
                console.log("both same")
            }
        }
    }
    return (alice, bob);
}

var ali = [5,6,7];
var bo = [3,6,10];

console.log(compareTriplets(ali,bo))