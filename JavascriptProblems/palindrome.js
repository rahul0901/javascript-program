// var x = 121;        //3 ... 0 1 2... true
var x = 12345;      //false
// var x = 1234321;    //true
const checkPalindrome = (n) => {
    var str = n.toString();
    // console.log(str.length/2)   //1.5
    for (var i = 0; i < str.length / 2; i++) {
        //console.log(i, str[i]) //..0 1 2 in 3 lines
        if (str[i] !== str[str.length - 1 - i]) {  //i is 0,1
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome(x))
// console.log()

// Explanation:
// sbse phele var x ek integer hai toh convert krna pdega string kyuki iteration sirf strings array asa saab datstruture ai hota hai..
// var i = 0 mtlb suppose apna example hai 1234321 abhi iska length hai 7 last element target is - str.length-1 0123456 asa..
// abhi for loop 0 se --> str.length / 2 mtlb 3.5 which is 3 i.e 0123 itna hi iterate hoga i ka value..
//i = 0 pe str[0] = 1 same ans
// i = 1 pe str[1] = 2
// i = 2 pe str[2] = 3
// i = 3 pe str[3] = 4  taak jayega yeh..
// uske baad str[str.length - 1 - i] iska mtlb hai -1-i idhr i 0 se 3 taak jayega..
//  -1-0 --> -1 aur -1 pe 1 hai,
//  -1-1, --> -2 aur -2 pe 2 hai
//  -1-2, --> -3 aur -3 pe 3 hai
//  -1-3  --> -4 aur -4 pe 4 haibss..

//-----------------------------------------------------------------

// leetcode #9

// var isPalindrome = function(x) {
//     var str = x.toString();
//     for (var i = 0; i<str.length; i++){
//         if(str[i] !== str[str.length - 1 - i]){
//             return false;
//         }
//     }
//     return true;
// };