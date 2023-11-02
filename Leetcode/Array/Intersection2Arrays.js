// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersection = function (nums1, nums2) {
//     var arr = [];
//     for (let i = 0; i < nums2.length; i++) {
//         // console.log(nums1[i])
//         for (let j = 0; j < nums1.length; j++) {
//             if (nums2[i] == nums1[j]) {
//                 if (!arr.includes(nums2[i])) {
//                     arr.push(nums2[i])
//                 }
//                 // console.log(nums2[j])
//             }
//         }
//     }
//     return arr;
// };