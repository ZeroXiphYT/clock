const timeDiv = document.getElementById('time')
const dateDiv = document.getElementById('date')
function updateTime(){
const d = new Date()
//hours
let meri;
let h;
let hour = d.getHours()
if(hour > 12){
  meri = 'PM'
  h = hour - 12
}else{
  meri = 'AM'
  h = hour
}
  //minutes
let min = d.getMinutes()
if(min < 10){
  let n = min
  min = '0' + n
}
  //seconds
  let sec = d.getSeconds()
  if(sec < 10){
    let s = sec
    sec = '0' + s
  }
  timeDiv.textContent = `${h}:${min}:${sec} ${meri}`
}

function updateDate(){
  const d = new Date()
  //month
  const m = d.getMonth() + 1
  //Date
  const date = d.getDate()
  //Year
  const year = d.getFullYear()
  //month name
  const mName = {
    1:'January',
    2:'Febuary',
    3:'March',
    4:'April',
    5:'May',
    6:'June',
    7:'July',
    8:'August',
    9:'September',
    10:'October',
    11:'November',
    12:'December'
}
  let month = mName[m]
  
  dateDiv.textContent = `${m}/${date}/${year} (${month} ${date}, ${year})`
}

function update(){
updateTime()
updateDate()
}

setInterval(update, 1000)