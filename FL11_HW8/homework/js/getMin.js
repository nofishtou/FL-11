function getMin() {
  let arr = getMin.arguments
  let result = arr[0]

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < result) {
      result = arr[i];
    }
  }

  return result
}

console.log(getMin(4, 9, -4, 6))
