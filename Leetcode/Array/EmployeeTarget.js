// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// Explanation: The company wants each employee to work for at least 2 hours.
// - Employee 0 worked for 0 hours and didn't meet the target.
// - Employee 1 worked for 1 hours and didn't meet the target.
// - Employee 2 worked for 2 hours and met the target.
// - Employee 3 worked for 3 hours and met the target.
// - Employee 4 worked for 4 hours and met the target.
// There are 3 employees who met the target.
// Example 2:

// Input: hours = [5,1,4,2,2], target = 6
// Output: 0
// Explanation: The company wants each employee to work for at least 6 hours.
// There are 0 employees who met the target.

var numberOfEmployeesWhoMetTarget = function(hours, target) {
    var hardworkingEmployees = 0;
    for (let i = 0; i<hours.length; i++){
        if(hours[i] >= target){
            hardworkingEmployees = hardworkingEmployees + 1;
        }
    }
    return hardworkingEmployees;
};

console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4]), 2)


// /**
//  * @param {number[][]} accounts
//  * @return {number}
//  */
// var maximumWealth = function (accounts) {
//     // console.log(accounts[0], accounts[0][0])
//     var final = 0;
//     for (let i = 0; i < accounts.length; i++) {
//         var sum = 0;
//         var innerArray = accounts[i];
//         for (let j = 0; j < innerArray.length; j++) {
//             sum = sum + innerArray[j];
//             if (final < sum) {
//                 final = sum;
//             }
//         }
//     }
//     return final;
// };