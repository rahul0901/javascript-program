var aree = ["ram", 'sham', "ganesh", "gcjcb", "ceugcclo"];
// console.log(aree.length)                        //5
// console.log(aree[0])                            //ram
// console.log(aree[aree.length-1])                //ceugcclo

for (i = 0; i < aree.length; i++) {
    // console.log(`${i} - ${aree[i]}`)
    if (aree[i] == "sham") {
        // console.log(`${i}`)
        console.log("Got it at index - ", i)
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