// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

var getConcatenation = function(nums) {
    var ans = [];
    var ans1 = [];
    for(let i = 0; i<nums.length; i++){
        ans1.push(nums[i])
    }
    ans = ans1.concat(nums)
    return ans;
};

console.log(getConcatenation([1,2,3,4,5,6]))