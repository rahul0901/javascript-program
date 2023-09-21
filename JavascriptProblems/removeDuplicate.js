var arr = [2, 3, 3, 4, 5, 5, 6, 7, 8, 6, 9];
var newArr = [];

for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);


// var fruits = ["apple", "banana", "cherry", "date", "apple"];

// var indexOfApple = fruits.indexOf("apple"); // indexOfApple will be 0
// var indexOfDate = fruits.indexOf("date");   // indexOfDate will be 3
// var indexOfGrape = fruits.indexOf("grape"); // indexOfGrape will be -1 (not found)

// In this example, indexOfApple returns 0 because the first occurrence of "apple" is at index 0. indexOfDate returns 3 because "date" is found at index 3. indexOfGrape returns -1 because "grape" is not found in the array.