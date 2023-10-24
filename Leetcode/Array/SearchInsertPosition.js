// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
       if (nums[i] >= target) {
           return i;
       }
   }
   return nums.length;

   // for(let i = 0; i<nums.length; i++){
   //     if(nums[i] === target){
   //         return i;
   //     }
   //     if(nums[i]<= target){
   //         nums.push(target)
   //     }
   // }
   
};

console.log(searchInsert([1,3,5,6], 5))  //2
console.log(searchInsert([1,3,5,6], 2))  //1
console.log(searchInsert([1,3,5,6], 4))  //2
console.log(searchInsert([1,3,5,6], 7))  //4

