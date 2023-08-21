// var aree = ["ram", 'sham', "ganesh", "gcjcb", "ceugcclo"];
// // console.log(aree.length)                        //5
// // console.log(aree[0])                            //ram
// // console.log(aree[aree.length-1])                //ceugcclo

// for (i = 0; i < aree.length; i++) {
//     // console.log(`${i} - ${aree[i]}`)
//     if (aree[i] == "sham") {
//         // console.log(`${i}`)
//         console.log("Got it at index - ", i)
//     }

// }
// ***************************************************************************

// var aray = [2, 3, 4, 5, 6, 7, 8, 23, 89, 43, 76, 323, 679, 9654, 94, 2324, 465, 83, 28, 47, 88]
// console.log(aray)
// // console.log(aray.length) // length is 21 and it will be from 0 to 20
// var odd = [];
// var even = [];
// for(i = 0; i < aray.length; i++){
//     if (aray[i] % 2 == 0){
//         // console.log(`${aray[i]} is even & index - ${i}`)
//         even.push(aray[i]);
//     }
//     else{
//         // console.log(`${aray[i]} is odd & index - ${i}`)
//         odd.push(aray[i]);
//     }
// }

// console.log(`Array of all odd numbers from aray are - ${odd} and length of odd array is ${odd.length}`)
// console.log("Array of all even numbers from aray are -", even, "and length of even array is", even.length)

// ***************************************************************************

// var aray = [2, 3, 4, 5, 6, 7, 8, 23, 89, 43, 76, 323, 679, 9654, 94, 2324, 465, 83, 28, 47, 88]

// var addOdd = 0;
// for (i = 0; i < aray.length; i++) {
//     if (aray[i] % 2 !== 0) {
//         // console.log(`${aray[i]} is odd & index - ${i}`)
//         addOdd= addOdd + aray[i];
//     }
// }
// console.log(addOdd)

// ***************************************************************************

var arr = [2,3,7,5,10];
        // 0,1,2,3,4

var target = 10;

for(i = 0; i < arr.length; i++){
    // console.log(i)
    for(j = i+1; j<arr.length; j++){
        // console.log(i, arr[i], j, arr[j])
        if(arr[i] + arr[j] == target){
            console.log(arr[i],"+",arr[j], "=", target)
        }
    }
}































// ***************************************************************************

//ye loop mai 100 se 50 taak jaara hai backprocessing mai jaise prr 80 milega op dega we got krke aur break se loop end krega..
// for (var i = 100; i >= 50; i = i - 1) {
//     // console.log(i)
//     if (i == 80) {
//         console.log("We got 80.")
//         break;
//     }
// }
// ***************************************************************************

//ye loop mai 100 se 50 taak jaayega aur print bhi hoga.. jaise prr 80 milega op dega we got krke aur break se loop end krega..

// for (var i = 100; i >= 50; i = i - 1) {
//     // console.log(i)
//     if (i == 80) {
//         console.log("We got 80.")
//         break;
//     }
//     else {
//         console.log(i)
//     }
// }
// ***************************************************************************

//ye loop mai 0 se 15 taak jaayega aur print bhi hoga har ek no.. jaise prr 7 milega op dega we got krke aur aage ka no bhi print krega..

// for (var i = 0; i < 15; i++) {
//     if (i == 7) {
//         console.log("We got 7")
//         continue
//     }
//     else {
//         console.log(i)
//     }
// }