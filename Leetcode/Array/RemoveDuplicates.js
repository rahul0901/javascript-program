// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// var removeDuplicates = function (nums) {
//     var uniqueNum = 1;
//     if (nums.length === 0) {
//         return 0;
//     }
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[uniqueNum] = nums[i];
//             uniqueNum++;
//         }
//     }
//     return uniqueNum;
// }

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
// console.log(removeDuplicates([1, 1, 2, 3, 4, 3, 2, 5, 6, 7]))


var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            nums[++i] = nums[j];
        }
    }
    return ++i;
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 7, 2]))

// do number as pas rahega toh hi ye unique number count deta hai wrna jaise upr 2 1 index pe hai fr last index pe hai toh output 8 unique counts dera hai toh solution sirf leetcode taak chlra hai wihtout error..