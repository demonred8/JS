// Get Random user

document.getElementById('button').onclick = function () { getUser() };

let userObj = {}

async function getData() {
  await fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then(data => userObj = data['results'][0])
}

async function getUser() {
  let button = document.getElementById('button-text')
  button.innerHTML = 'Loading...'
  await getData()
  await setData()
  button.innerHTML = 'Next user'
}

async function setData() {
  let photo = document.getElementById('photo')
  photo.src = userObj.picture.large

  let gender = document.getElementById('gender-text')
  gender.textContent = userObj.gender

  let fullname = document.getElementById('name-text')
  fullname.textContent = Object.values(userObj.name).join(' ')

  let locationCity = document.getElementById('location-city')
  locationCity.textContent = `City: ${userObj.location.city}`

  let locationCountry = document.getElementById('location-country')
  locationCountry.textContent = `Country: ${userObj.location.country}`

  let locationState = document.getElementById('location-state')
  locationState.textContent = `State: ${userObj.location.state}`

  let locationStreetName = document.getElementById('location-street-name')
  locationStreetName.textContent = `Name: ${userObj.location.street.name}`

  let locationStreetNumber = document.getElementById('location-street-number')
  locationStreetNumber.textContent = `Number: ${userObj.location.street.number}`

  let email = document.getElementById('email-text')
  email.textContent = userObj.email

  let loginMD5 = document.getElementById('login-md5')
  loginMD5.textContent = `MD5: ${userObj.login.md5}`

  let loginPass = document.getElementById('login-pass')
  loginPass.textContent = `Password: ${userObj.login.password}`

  let loginSalt = document.getElementById('login-salt')
  loginSalt.textContent = `Salt: ${userObj.login.salt}`

  let loginSHA1 = document.getElementById('login-sha1')
  loginSHA1.textContent = `SHA1: ${userObj.login.sha1}`

  let loginSHA256 = document.getElementById('login-sha256')
  loginSHA256.textContent = `SHA256: ${userObj.login.sha256}`

  let loginUsername = document.getElementById('login-username')
  loginUsername.textContent = `Username: ${userObj.login.username}`

  let loginUUID = document.getElementById('login-uuid')
  loginUUID.textContent = `UUID: ${userObj.login.uuid}`

  let birthdayDate = document.getElementById('birthday-date')
  birthdayDate.textContent = `Date: ${userObj.dob.date}`

  let birthdayAge = document.getElementById('birthday-age')
  birthdayAge.textContent = `Age: ${userObj.dob.age}`

  let registrationDate = document.getElementById('registered-date')
  registrationDate.textContent = `Date: ${userObj.registered.date}`

  let registrationAge = document.getElementById('registered-age')
  registrationAge.textContent = `Age: ${userObj.registered.age}`

  let phoneCell = document.getElementById('phone-cell')
  phoneCell.textContent = `Cell: ${userObj.cell}`

  let phoneMobile = document.getElementById('phone-mobile')
  phoneMobile.textContent = `Mobile: ${userObj.phone}`
}