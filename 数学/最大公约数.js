function test(num1, num2) {
  return num2 === 0 ? num1
                    : test(num2, num1 % num2);
}

console.log(test(3, 12));
