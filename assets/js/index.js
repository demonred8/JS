// Get Random user

document.getElementById('button').onclick = getUser;

let userObj = {}

async function getData() {
  await fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then(data => userObj = data.results[0])
}

async function getUser() {
  let button = document.getElementById('button-text')
  button.textContent = 'Loading...'
  await getData()
  setData()
  button.textContent = 'Next user'
}

function setData() {
  document.getElementById('photo').src = userObj.picture.large
  setTextContent('gender-text', userObj.gender)
  setTextContent('name-text', Object.values(userObj.name).join(' '))
  setTextContent('name-text', Object.values(userObj.name).join(' '))
  setTextContent('location-city', `City: ${userObj.location.city}`)
  setTextContent('location-country', `Country: ${userObj.location.country}`)
  setTextContent('location-state', `State: ${userObj.location.state}`)
  setTextContent('location-street-name', `Name: ${userObj.location.street.name}`)
  setTextContent('location-street-number', `Number: ${userObj.location.street.number}`)
  setTextContent('email-text', userObj.email)
  setTextContent('login-md5', `MD5: ${userObj.login.md5}`)
  setTextContent('login-pass', `Password: ${userObj.login.password}`)
  setTextContent('login-salt', `Salt: ${userObj.login.salt}`)
  setTextContent('login-sha1', `SHA1: ${userObj.login.sha1}`)
  setTextContent('login-sha256', `SHA256: ${userObj.login.sha256}`)
  setTextContent('login-username', `Username: ${userObj.login.username}`)
  setTextContent('login-uuid', `UUID: ${userObj.login.uuid}`)
  setTextContent('birthday-date', `Date: ${userObj.dob.date}`)
  setTextContent('birthday-age', `Age: ${userObj.dob.age}`)
  setTextContent('registered-date', `Date: ${userObj.registered.date}`)
  setTextContent('registered-age', `Age: ${userObj.registered.age}`)
  setTextContent('phone-cell', `Cell: ${userObj.cell}`)
  setTextContent('phone-mobile', `Mobile: ${userObj.phone}`)
}

function setTextContent(id, text) {
  let elem = document.getElementById(id)
  elem.textContent = text
}
