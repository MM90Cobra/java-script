//--- 05) Coding-Task: If & switch statements

//--- 01) Spot the errors and fix them

const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10";
}
if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

//--- 02) oddEven function

function oddEven(num) {
  if (num % 2 === 0) {
    return "even";
  } else if (num % 2 !== 0) {
    return "uneven";
  } else {
    return "Error! Only Numbers are allowed.";
  }
}

// TODO: Implement the oddEven function

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

// --- 03) oldYoung function

//let number = 0;

function oldYoung(number) {
  if (0 < number && number < 16) {
    return "children";
  } else if (16 < number && number < 50) {
    return "young person";
  } else if (number >= 50) {
    return "elder person";
  } else {
    return "invalid parameter";
  }
}

// TODO: Implement the oldYoung function

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
