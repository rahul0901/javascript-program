var findMedianSortedArrays = function(nums1, nums2){
    var mergedArray = nums1.concat(nums2);
    var c = 0;
    for(let i = 0; i<mergedArray.length; i++){
        c = c+ mergedArray[i];
    }
    c = c/mergedArray.length;
    return c;
}

console.log(findMedianSortedArrays([1,2], [3,4]))