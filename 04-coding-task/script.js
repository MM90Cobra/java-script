// 04) Coding-Task

//01) Spot the errors and fix them

//const userName = Brad;
let userName = "Jenna";

function getUserNameLength(name) {
  return (result = name.length);
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

console.log("-----------------------------------------");
console.log("-----------------------------------------");
//-----------------------------------------

// 02) isString function

const isString = function (value) {
  console.log(value);
  let newvalue = typeof value;
  console.log(newvalue);
  return newvalue === "string";
};

// TODO: Implement the isString function

console.log(isString("Hello"));
console.log("-----------------------------------------");
// result should be true

console.log(isString(3));
console.log("-----------------------------------------");
// result should be false

console.log(isString(undefined));
console.log("-----------------------------------------");
// result should be false

console.log(isString("123asd"));
console.log("-----------------------------------------");
// result should be true

console.log(isString("John" + "Doe"));
console.log("-----------------------------------------");
// result should be true

//-------------------
