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

function getCurrencySymbol(currency) {
  if (currency === "GEL") {
    return "₾"; // Georgian Lari
  } else if (currency === "USD") {
    return "$"; // US Dollar
  } else if (currency === "EUR") {
    return "€"; // Euro
  } else {
    return "Currency not supported";
  }
}

// Example usage:
console.log(getCurrencySymbol("EUR")); // Outputs: ₾
