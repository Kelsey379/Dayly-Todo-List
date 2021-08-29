function login() {
	
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + ' is logged in!!!')
			
			break
		} else {
			
			console.log('incorrect username or password')
		}
	}
}


function registerUser() {

	var registerUsername = document.getElementById('newUsername').value

	var registerPassword = document.getElementById('newPassword').value
	
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}

	for(var i = 0; i < objPeople.length; i++) {
	
		if(registerUser == objPeople[i].username) {
		
			alert('That username is already in user, please choose another')
		
			break
		
		} else if (registerPassword.length < 8) {
		
			alert('That is to short, include 8 or more characters')
			
			break
		}
	}

	objPeople.push(newUser)

	console.log(objPeople)
}

function redirectToRegister {
	window.location.href = "https://dulllizard67.qoom.space/~/Dayly/signup.js"
}