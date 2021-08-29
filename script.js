//JS file to combine all code that needs to be shared across pages
//home.html
var width = 0;
var points = 0;


function moveBar() {
	var elem = document.getElementById("bar-fill");
	var myCheck = document.getElementById("done1");
	var myCheck2 = document.getElementById("done2");
	
	if (width < 100) {
		if (myCheck.checked) {
			width += 1;
			points += 10;
			elem.style.width = width + '%'
			elem.innerHTML = "" + points;
	
		}
	}
};

    
//goals.js

//rewards.js
//Small Reward

//Small Reward
const element = document.getElementById("edit-small-reward");

document.getElementById("small-reward")
	.value = getSavedValue("small-reward");

document.getElementById("medium-reward")
	.value = getSavedValue("medium-reward");

document.getElementById("grand-reward")
	.value = getSavedValue("grand-reward");

//Save the value function - save it to localStorage as (ID, VALUE)
function saveValue(e) {
	var id = e.id; // get the sender's id to save it . 
	var val = e.value; // get the value. 
	localStorage.setItem(id, val); // Every time user writing something, the localStorage's value will override . 
};

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue(v) {
	if (!localStorage.getItem(v)) {
		return ""; // You can change this to your defualt value. 
	}
	return localStorage.getItem(v);
};

//popup.js

function toggleSmallRewardPopup() {
	document.getElementById("small-reward-message")
		.classList.toggle("active");
	if (getSavedValue("small-reward") !== null && getSavedValue("small-reward") !== "") {

		document.getElementById("small-reward-text")
			.innerHTML = localStorage.getItem("small-reward");

		document.getElementById("small-reward-button")
			.innerHTML = "REDEEM";

		document.getElementById("small-reward-button-link")
			.removeAttribute("href");
	}
};

function toggleMediumRewardPopup() {
	document.getElementById("medium-reward-message")
		.classList.toggle("active");

	if (getSavedValue("medium-reward") !== null && getSavedValue("medium-reward") !== "") {

		document.getElementById("medium-reward-text")
			.innerHTML = localStorage.getItem("medium-reward");

		document.getElementById("medium-reward-button")
			.innerHTML = "REDEEM";

		document.getElementById("medium-reward-button-link")
			.removeAttribute("href");
	}
};

function toggleGrandRewardPopup() {
	document.getElementById("grand-reward-message")
		.classList.toggle("active");

	if (getSavedValue("grand-reward") !== null && getSavedValue("grand-reward") !== "") {

		document.getElementById("grand-reward-text")
			.innerHTML = localStorage.getItem("grand-reward");

		document.getElementById("grand-reward-button")
			.innerHTML = "REDEEM";

		document.getElementById("grand-reward-button-link")
			.removeAttribute("href");

	}
};
