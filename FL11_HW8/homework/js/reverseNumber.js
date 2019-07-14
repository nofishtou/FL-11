function reverseNumber(number) {
  let result = 0;

  if (Math.sign(number) === -1) {
    number *= -1

    while (number) {
      result = result * 10 + number % 10;
      number = Math.floor(number / 10)
    }
  
    return result * -1
  }

  while (number) {
    result = result * 10 + number % 10
    number = Math.floor(number / 10)
  }

  return result
}

console.log(reverseNumber(123))
console.log(reverseNumber(-456))
console.log(reverseNumber(10000))