// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2: 

// Input: jewels = "z", stones = "ZZ"
// Output: 0

var jewels = "aA";
var stones = "aAAbbbb";

var numJewelsInStones = function (jewels, stones) {
    // console.log(jewels)
    // console.log(stones[0],stones)
    var c = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            c += 1; 
        }
    }
    return c;
};

console.log(numJewelsInStones(jewels, stones))


//-----------------------------------------------------------------------

// console.log(jewels+ stones)

// var numJewelsInStones = function (jewels, stones) {
//     var c = 0;
//     for (let i = 0; i < stones.length; i++) {
//         for (let j = 1; j < stones.length; j++) {
//             if (jewels.includes((stones[i] + stones[j]))) {
//                 c = c + 1;
//             }
//         }
//     }
//     return c;
// };

// console.log(numJewelsInStones(jewels, stones))