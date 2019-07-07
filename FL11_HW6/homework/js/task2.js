let sideA = +prompt('Введите сторону А треугольника А: ', '')
let sideB = +prompt('Введите сторону B треугольника А: ', '')
let sideC = +prompt('Введите сторону C треугольника А: ', '')

if (sideA + sideB >= sideC && sideA + sideC >= sideB && sideB + sideC >= sideA) {
  if (sideA === sideB && sideA === sideC && sideB === sideC) {
    console.log('Equivalent triangle')
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log('Isosceles triangle')
  } else {
    console.log('Normal triangle')
  }
} else {
  console.log('Triangle doesn’t exist')
}
