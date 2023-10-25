// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.

var finalValueAfterOperations = function (operations) {
    let X = 0;
    for (i = 0; i < operations.length; i++) {
        // console.log(operations[i], i)
        if (operations[i] === "--X" || operations[i] === "X--") {
            X -= 1;
        } else if(operations[i] === "X++" || operations[i] === "++X") {
            X += 1;
        }
    }
    return X;
};

console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--", "X--"]))


// console.log(operations[i], i, X)
        // if (operations[i] === "--X") {
        //     X = X- 1;
        // }
        // else if (operations[i] === "X--") {
        //     X = X-1;
        // }
        // else if (operations[i] === "X++") {
        //     X = X + 1;
        // }
        // else {
        //     X = X + 1;
        // }


        // if (operations[i] === "--X" || operations[i] === "X--") {
        //     X = X - 1;
        // } else if (operations[i] === "X++" || operations[i] === "++X") {
        //     X = X + 1;
        // }