function pipe(number) {
  let result = 0

  for(let i = 1; i < arguments.length; i++){
    result = result + arguments[i](number)
    console.log(result)
  }
  
  return result
}

function addOne (num) {
  return num++
}

console.log(pipe(1, addOne, addOne, addOne, addOne))