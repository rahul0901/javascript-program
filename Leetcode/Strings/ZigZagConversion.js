// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

var convert = function (s, numRows) {
    //length of s is 14..
    // console.log(s.length, s, numRows) 
    if (s == null || numRows <= 0) {
       return ''
    }
 
    if (numRows === 1) {
       return s
    }
 
    let result = '';
    const step = 2 * numRows - 2;
 
    for (let i = 0; i < numRows; i++) {
       for (let j = i; j < s.length; j += step) {
          result += s[j];
 
          if (i != 0 && i != numRows - 1 && (j + step - 2 * i) < s.length) {
             result += s[j + step - 2 * i];
          }
       }
    }
    return result;
 };

 console.log(convert("PAYPALISHIRING", 3)) //PAHNAPLSIIGYIR
 console.log(convert("PAYPALISHIRING", 4)) //PINALSIGYAHRPI
 console.log(convert("A", 1)) //A

