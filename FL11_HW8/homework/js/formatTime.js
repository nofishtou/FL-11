function formatTime(n) {
  const minutesInHour = 60
  const hoursInDay = 24
  let days = 0
  let hours = 0
  let minutes = 0
  let message = ''
  
  minutes = n % minutesInHour
  n = n - minutes
  hours = n / minutesInHour
  n = hours
  hours = hours % hoursInDay
  n = n - hours
  days = n / hoursInDay
  
  message = `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`
  
  return message
}

console.log(formatTime(3601))