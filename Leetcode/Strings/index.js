// 1) Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// var address = "1.1.1.1"  //length is 7..

// normal function......

var defangIPaddress = function (address) {
    var result = "";
    for (var i = 0; i < address.length; i++) {
        if (address[i] === '.') {
            result += "[.]"
        }
        else {
            result += address[i]
        }
    }
    return result;
}; 
console.log(defangIPaddress("255.255.255.1"))

// ---------------------------------------------------------------

// es6 function....
// const defangIPAddress = (address) => {
//     var result = "";

//     for(var i = 0; i<address.length; i++){
//         if(address[i] === '.'){
//             result += '[.]';
//         }
//         else{
//             result += address[i]
//         }
//     }

//     return result;
// }

// console.log(defangIPAddress("1.1.1.1"))