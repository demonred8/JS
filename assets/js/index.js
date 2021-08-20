// Get Random user

//a eshe y tebya tut kosyaк если я захочу убить твою кнопку то мне надо будте снять с неё обработчик вот этот

document.getElementById('button').addEventListener('click', getUser)

const userInput = document.getElementById('choose-users')

const btnText = document.getElementById('button-text')

userInput.addEventListener('change', textUserNumber)


function textUserNumber() {
  let usersNumber = Number(userInput.value)
  console.log(usersNumber)
  if (usersNumber === 1) {
    btnText.textContent = `Get ${usersNumber} user`
  }
  else {
    btnText.textContent = `Get ${usersNumber} users`
  }
}

let users = []

const asyncGetData = () => fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => users.push(data.results[0]))

function getUser() {
  let usersNumber = Number(userInput.value)
  users.length = 0

  document.getElementById('users').replaceChildren()
  
  btnText.textContent = 'Loading...'
  const fetchingPromises = new Array(usersNumber).fill(0).map(_v => asyncGetData())

  Promise.all(fetchingPromises).then(v => {
    users.forEach(v => setData(v)) 
    textUserNumber()
  })
}

function createUserDiv(id) {
  let div = document.createElement('div')
  div.id = 'user ' + id
  div.className = 'user box'
  document.getElementById('users').append(div)
}

function createUserImg(id, obj, path) {
  let img = document.createElement('img')
  img.className = 'user img'
  img.src = getFromObj(obj, path)
  img.alt = 'User Photo'
  document.getElementById('user ' + id).append(img)
}

// function createDisabledInput(id, obj, theme, path) {
//   let input = document.createElement('input')
//   // input.disabled = true
//   let classes = input.classList
//   classes.add('user')
//   classes.add('input')
//   input.defaultValue = theme + `${getFromObj(obj, path)}`
//   document.getElementById('user ' + id).append(input)
// }

function createCategory(id, obj, theme, path) {
  let div = createCategoryDiv()
  let span = document.createElement('span')
  let input = document.createElement('input')

  span.className = 'user span'
  input.className = 'user input'

  span.textContent = theme
  input.defaultValue = getFromObj(obj, path)

  div.appendChild(span)
  div.appendChild(input)
  document.getElementById('user ' + id).append(div)
}

function createCategoryDiv() {
  let div = document.createElement('div')
  div.className = 'user category'
  return div
}

function createUserName(id, obj, path) {
  let div = createCategoryDiv()
  let span = document.createElement('span')
  let input = document.createElement('input')

  span.className = 'user span'
  input.className = 'user input'

  span.textContent = 'Name: '
  input.defaultValue = Object.values(getFromObj(obj, path)).join(' ')

  div.appendChild(span)
  div.appendChild(input)
  document.getElementById('user ' + id).append(div)
}

function setData(userObj) {
  let id = userObj.login.username
  createUserDiv(id)
  createUserImg(id, userObj, 'picture.large')
  createCategory(id, userObj, 'Gender: ', 'gender')
  createUserName(id, userObj, 'name')
  createCategory(id, userObj, 'City: ', 'location.city')
  createCategory(id, userObj, 'Country: ', 'location.country')
  createCategory(id, userObj, 'State: ', 'location.state')
  createCategory(id, userObj, 'Street name: ', 'location.street.name')
  createCategory(id, userObj, 'Street number: ', 'location.street.number')
  createCategory(id, userObj, 'E-Mail: ', 'email')
  createCategory(id, userObj, 'Login: ', 'login.username')
  createCategory(id, userObj, 'Password: ', 'login.password')
  createCategory(id, userObj, 'Date of Birthday: ', 'dob.date')
  createCategory(id, userObj, 'Age: ', 'dob.age')
  createCategory(id, userObj, 'Date of Registration: ', 'dob.date')
  createCategory(id, userObj, 'Registered: ', 'dob.age')
  createCategory(id, userObj, 'Cell: ', 'cell')
  createCategory(id, userObj, 'Mobile: ', 'phone')
}

function setTextContent(id, text) {
  let elem = document.getElementById(id)
  elem.textContent = text
}

const getFromObj = (obj, elem) => elem.split('.').reduce((o, i) => o[i], obj)




{
  // function promiseTest() {
  //   const p = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve() // вернуть успешное выполнение промиса спустя 3 секунды
  //     }, 3000)
  //   })

  //   console.log('test')

  //   p.then(() => {
  //     console.log('Promise Finished') // После выполнения setTimeout
  //   })
  // }

  // function doItAfter(seconds) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(), seconds * 1000)
  //   })
  // }

  // doItAfter(5)
  //   .then(() => console.log('Do it!'))
  //   .then(() => console.log('Do it After'))
}