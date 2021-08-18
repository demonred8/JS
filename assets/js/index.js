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
  document.getElementById('gender-text').textContent = userObj.gender
  document.getElementById('name-text').textContent = Object.values(userObj.name).join(' ')
  document.getElementById('location-city').textContent = `City: ${userObj.location.city}`
  document.getElementById('location-country').textContent = `Country: ${userObj.location.country}`
  document.getElementById('location-state').textContent = `State: ${userObj.location.state}`
  document.getElementById('location-street-name').textContent = `Name: ${userObj.location.street.name}`
  document.getElementById('location-street-number').textContent = `Number: ${userObj.location.street.number}`
  document.getElementById('email-text').textContent = userObj.email
  document.getElementById('login-md5').textContent = `MD5: ${userObj.login.md5}`
  document.getElementById('login-pass').textContent = `Password: ${userObj.login.password}`
  document.getElementById('login-salt').textContent = `Salt: ${userObj.login.salt}`
  document.getElementById('login-sha1').textContent = `SHA1: ${userObj.login.sha1}`
  document.getElementById('login-sha256').textContent = `SHA256: ${userObj.login.sha256}`
  document.getElementById('login-username').textContent = `Username: ${userObj.login.username}`
  document.getElementById('login-uuid').textContent = `UUID: ${userObj.login.uuid}`
  document.getElementById('birthday-date').textContent = `Date: ${userObj.dob.date}`
  document.getElementById('birthday-age').textContent = `Age: ${userObj.dob.age}`
  document.getElementById('registered-date').textContent = `Date: ${userObj.registered.date}`
  document.getElementById('registered-age').textContent = `Age: ${userObj.registered.age}`
  document.getElementById('phone-cell').textContent = `Cell: ${userObj.cell}`
  document.getElementById('phone-mobile').textContent = `Mobile: ${userObj.phone}`
}