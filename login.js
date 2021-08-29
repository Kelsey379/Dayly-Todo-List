var objPeople = [
	{
		username: "DaylyDemo",
		password: "12345678"
	}
	]

function login() {
	
	var username = document.getElementById('username').value
	 var password = document.getElementById('password').value
	 
	 for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
	 		alert(username + ' is logged in!')
	 		window.location.replace("home.html")
			
	 		break
	 	 } else {
			
	 	 	alert('incorrect username or password')
	 	 	console.log(objPeople)
	 	 }
	 }
}
console.log()

function registerUser() {
	
	var registerUsername = document.getElementById('newUsername').value

	var registerPassword = document.getElementById('newPassword').value
	
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}

	for(var i = 0; i < objPeople.length; i++) {
	
		if(registerUsername == objPeople[i].username) {
		
			alert('That username is already in use, please choose another')
		
			break
		
		} else if (registerPassword.length < 8) {
		
			alert('That is to short, include 8 or more characters')
			
			break
		}
		
		else {
			 alert('signed up successfully!');
			 
			 break
		}
		console.log()
	}

	objPeople.push(newUser);
	console.log(objPeople)
}

window.logout = function() {
	fetch("loginscreen.html", { method: 'POST'});
	alert("Logged Out!")
	location.href = "loginscreen.html"
}
