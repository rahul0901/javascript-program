// Adding any two numbers such that it's sum should be equal to target..

var num = [11, 15, 8, 3, 2, 6, 7, 2];
var target = 9;

const twoSum = (arr, target) => {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == target){
                return [i,j]
            }
        }
    }
}

console.log(twoSum(num,target))  //.. o/p - [ 3, 5 ]