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
