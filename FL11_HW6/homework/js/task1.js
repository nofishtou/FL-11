const divider = 2
let aCorX = prompt('Введите кординату Х точки А: ', '')
let aCorY = prompt('Введите кординату Y точки А: ', '')
let bCorX = prompt('Введите кординату Х точки B: ', '')
let bCorY = prompt('Введите кординату Y точки B: ', '')
let cCorX = prompt('Введите кординату Х точки C: ', '')
let cCorY = prompt('Введите кординату Y точки C: ', '')

let midPointCorX = (+aCorX + +bCorX) / divider
let midPointCorY = (+aCorY + +bCorY) / divider

if (cCorX === midPointCorX && cCorY === midPointCorY) {
  console.log(true)
} else {
  console.log(false)
}
