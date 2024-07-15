// 06) - using loops

//01) oddNumbers function

// TODO: Implement the oddNumbers function

function oddNumbers(startNum, endNum) {
  let result = "";

  for (; startNum <= endNum; startNum++) {
    if (startNum % 2 !== 0) {
      result += startNum;
      if (startNum !== endNum && startNum !== endNum - 1) {
        result += ",";
      }
    }
  }

  return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// 02) charCount function

// TODO: Implement the charCount function

//let word = "";
//let char = "";

function charCount(word, char) {
  let count = 0;

  if (char.length > 1) {
    return "Error";
  }

  for (let index = 0; index < word.length; index++) {
    if (word[index].toUpperCase() === char.toUpperCase()) {
      console.log("index " + index + " " + char);
      count = count + 1;
    }
  }

  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "M"));
// result should be: 2

console.log(charCount("ResümeE", "e"));
// result should be: 3

console.log(charCount("TEST", "teSt"));
// result should be: Error; break out of function
