var shuffle = function(nums, n) {
    var newArray = [];
    for(let i = 0; i<n; i++){
        newArray.push(nums[i]);
        newArray.push(nums[i+n]);
    }
    return newArray;
};

console.log(shuffle([2,5,1,3,4,7], 3))