// 01) Greet function

function welcomeMsg(name) {
  return name;
}

console.log(welcomeMsg("Marco"));

// 02) Gross Price Function

function calcGrossPrice(net, tax) {
  return net + net * tax;
}
console.log(calcGrossPrice(20, 0.19));

// 03) Add Positive Function

function addPositive(num1, num2) {
  if (num1 <= 0) {
    num1 = num1 - 2 * num1;
    console.log(num1);
  }

  if (num2 <= 0) {
    num2 = num2 - 2 * num2;
    console.log(num2);
  }

  return num1 + num2;
}

console.log(addPositive(-31, -18));
