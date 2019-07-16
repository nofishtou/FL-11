const testArr = [0, 1]

const testArrForAdult =[
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]


function getNumbers(str) {
  let arr = []

  for(let i = 0; i < str.length; i++) {
    if(isFinite(str[i])){
      arr.push(str[i])
    } 
  }
  return arr
}

getNumbers(`n1um3ber95`)


function findTypes(...args){
  let obj = {}
  let typeofobj

  for(let i = 0; i < args.length; i++) {
    typeofobj = typeof findTypes.arguments[i]

    if(obj[typeofobj] === undefined){
      obj[typeofobj] = 0
    } 
    obj[typeofobj] += 1
  }

  return obj
}

findTypes(null, 1, `hello`)


function executeforEach(arr, func) {
  for(let i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}

executeforEach(testArr, el => console.log(el)) 


function mapArray(arr, func) {
  let newArr =[]
  executeforEach(arr, function(item) {
    let number = func(item)
    newArr.push(number)
  })
  
  return newArr
}

mapArray(testArr, el => el + 1)


function filterArray(arr, func) {
  let newArr =[]

  executeforEach(arr, function(item){ 
    let number = func(item)
    if(number) {
      newArr.push(item)
    }
  })

  return newArr
}

filterArray( testArr, el => el > 1 )

function showFormattedDate(date) {
  let options = {
    day : `numeric`,
    month : `short`
  }

  let dateDayMonth = date.toLocaleString( 'en-US', options)
  let dateYear = date.getFullYear() 
  let result = `Date: ${dateDayMonth} ${dateYear}`

  return result
}

showFormattedDate(new Date('2019-01-27T01:10:00'))


function canConvertedToDate(date) {
  let el = new Date(date);
  
  return isFinite(el);
}

canConvertedToDate(new Date('2019-01-27T01:10:00')) 


function daysBetween(startDate, endDate) {
  const hrInDay = 24
  const minInHrs = 60
  const secInMin = 60
  const mlsecsInSec = 1000
  const diff = endDate - startDate
  let result = Math.ceil(diff/(hrInDay*minInHrs*secInMin*mlsecsInSec))
  
  return result
}

daysBetween(new Date('2019-01-27T01:10:00'), new Date('2019-03-27T01:10:00'))


function getAmountOfAdultPeople(data) {
  let years = 18, days = 365, adults = years * days; 

  return filterArray(data, function (elem) {
    return daysBetween(new Date(elem[` birthday `]), new Date()) > adults
  }).length
}

getAmountOfAdultPeople(testArrForAdult)


function keys(item) {
  let arr = []

  for (let key in item) {
    if (Object.prototype.hasOwnProperty.call(item, key)) {
      arr.push(key)
    }  
  }

  return arr
}

keys()


function values(item) {
  let arr = []

  for (let key in item) {
    if (Object.prototype.hasOwnProperty.call(item, key)) {
      arr.push(item[key])
    }  
  }

  return arr
}

values() 