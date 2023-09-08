var num = 1;

function starPattern(arr) {
    for (var i = 0; i < arr; i++) {
        // console.log("*")
        var pattern = "*"
        // console.log(pattern)
        for (var j = 0; j < i; j++) {
            // console.log("#")
            // pattern+="*"
            pattern += "#"
        }
        console.log(pattern,i,j)
    }
}
starPattern(num)
// console.log(pattern)