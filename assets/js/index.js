// Get Random user
let userObj = {}

document.getElementById('button').onclick = function () { getUser() };

async function getUser() {
  let button = document.getElementById('button-text')
  button.innerHTML = 'Loading...';
  await $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
      userObj = data['results'][0]
    }
  });
  console.log(userObj)
  await setData()
  button.innerHTML = 'Next user';
}

async function setData() {
  let photo = document.getElementById('photo')
  photo.src = userObj['picture']['large']

  let gender = document.getElementById('gender-text')
  gender.innerHTML = userObj['gender']

  let fullname = document.getElementById('name-text')
  fullname.innerHTML = Object.values(userObj['name']).join(' ')

  let location = document.getElementById('location-text')
  location.innerHTML =
    `<p>City: ${userObj['location']['city']}</p>
   <p>Country: ${userObj['location']['country']}</p> 
   <p>State: ${userObj['location']['state']}</p>
   <p>Street: </p>
   <p>Name: ${userObj['location']['street']['name']}</p>
   <p>Number: ${userObj['location']['street']['number']}</p>`

  let email = document.getElementById('email-text')
  email.innerHTML = userObj['email']

  let login = document.getElementById('login-text')
  login.innerHTML =
    `<p>MD5: ${userObj['login']['md5']}</p>
  <p>Password: ${userObj['login']['password']}</p> 
  <p>Salt: ${userObj['login']['salt']}</p>
  <p>SHA1: ${userObj['login']['sha1']}</p>
  <p>SHA256: ${userObj['login']['sha256']}</p>
  <p>Username: ${userObj['login']['username']}</p>
  <p>UUID: ${userObj['login']['uuid']}</p>`

  let birthday = document.getElementById('birthday-text')
  birthday.innerHTML =
    `<p>Date: ${userObj['dob']['date']}</p>
  <p>Age: ${userObj['dob']['age']}</p>`

  let registration = document.getElementById('registered-text')
  registration.innerHTML =
    `<p>Date: ${userObj['registered']['date']}</p>
  <p>Age: ${userObj['registered']['age']}</p>`

  let phone = document.getElementById('phone-text')
  phone.innerHTML = 
  `<p>Cell: ${userObj['cell']}
  <p>Mobile: ${userObj['phone']}`
}