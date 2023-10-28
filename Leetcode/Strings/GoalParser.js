// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

var goalParser = function(command){
    var result = '';
    var i = 0;
    while(i<command.length){
        if(command[i] === 'G'){
            result += 'G';
            // i++;
        }
    }
    return result;
}
var commanddd = "G()(al)";
console.log(goalParser(commanddd))