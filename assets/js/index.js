// Get Random user

document.getElementById('button').onclick = getUser;
document.getElementById('button-users').onclick = getUsers;
document.getElementById('choose-user').onclick = chooseUser;

let userObj = {}
let tempArray = []

async function getData() {
  await fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then(data => userObj = data.results[0])
}

async function getDataN() {
  let tempObj = {}
  await fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then(data => tempObj = data.results[0])
    return tempObj
}

async function getUser() {
  let button = document.getElementById('button-text')
  button.textContent = 'Loading...'
  await getData()
  setData()
  button.textContent = 'Next one user'
}

async function getUsers() {
  console.log('test')
  let users = document.getElementById('choose-users').value
  let button = document.getElementById('button-get-users-text')
  for (let i = 0; i < users; i++) {
    button.textContent = 'Loading...' + ' ' + i
    tempArray[i] = await getDataN()
  }
  console.log(tempArray)
  button.textContent = 'Get Users'
}

function chooseUser() {
  let user = document.getElementById('choose-one-user').value - 1
  userObj = tempArray[user]
  tempArray = []
  setData()
}

function setData() {
  document.getElementById('photo').src = getFromObj('picture.large')
  setTextContent('gender-text', getFromObj('gender'))
  setTextContent('name-text', Object.values(getFromObj('name')).join(' '))
  setTextContent('name-text', Object.values(getFromObj('name')).join(' '))
  setTextContent('location-city', `City: ${getFromObj('location.city')}`)
  setTextContent('location-country', `Country: ${getFromObj('location.country')}`)
  setTextContent('location-state', `State: ${getFromObj('location.state')}`)
  setTextContent('location-street-name', `Name: ${getFromObj('location.street.name')}`)
  setTextContent('location-street-number', `Number: ${getFromObj('location.street.number')}`)
  setTextContent('email-text', getFromObj('email'))
  setTextContent('login-md5', `MD5: ${getFromObj('login.md5')}`)
  setTextContent('login-pass', `Password: ${getFromObj('login.password')}`)
  setTextContent('login-salt', `Salt: ${getFromObj('login.salt')}`)
  setTextContent('login-sha1', `SHA1: ${getFromObj('login.sha1')}`)
  setTextContent('login-sha256', `SHA256: ${getFromObj('login.sha256')}`)
  setTextContent('login-username', `Username: ${getFromObj('login.username')}`)
  setTextContent('login-uuid', `UUID: ${getFromObj('login.uuid')}`)
  setTextContent('birthday-date', `Date: ${getFromObj('dob.date')}`)
  setTextContent('birthday-age', `Age: ${getFromObj('dob.age')}`)
  setTextContent('registered-date', `Date: ${getFromObj('registered.date')}`)
  setTextContent('registered-age', `Age: ${getFromObj('registered.age')}`)
  setTextContent('phone-cell', `Cell: ${getFromObj('cell')}`)
  setTextContent('phone-mobile', `Mobile: ${getFromObj('phone')}`)
}

function setTextContent(id, text) {
  let elem = document.getElementById(id)
  elem.textContent = text
}

function getFromObj(elem) {
  return elem.split('.').reduce((o, i) => o[i], userObj)
}
