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
console.log(discountPrice(300, 10));

// ==========================
