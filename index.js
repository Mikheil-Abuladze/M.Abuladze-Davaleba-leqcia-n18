function testNum(a) {
  if (a % 10 === 0) {
    result = "true";
  } else {
    result = "false";
  }
  return result;
}
console.log(testNum(10));

// ==========================

function discountPrice(a, b) {
  result = a * (1 - b / 100);
  return result;
}
console.log(discountPrice(270, 10));

// ==========================

function getCurrencySymbolFromCode(currency) {
  if (currency === "GEL") {
    return "₾";
  } else if (currency === "USD") {
    return "$";
  } else if (currency === "EUR") {
    return "€";
  } else {
    return "Currency not supported";
  }
}

console.log(getCurrencySymbolFromCode("GEL"));
// ==========================
function toLowerCaseString(input) {
  return input.toLowerCase();
}

console.log(toLowerCaseString("I NEED MONEY"));
// ==========================

function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getEvenNumbers(numbers));

//===========================
