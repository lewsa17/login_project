const loginButton = document.getElementById("login-form-submit");
//prosta walidacja / sprawdzenie czy podana wartość jest zgodna z wprowadzoną	
loginButton.addEventListener("click", (e) => {
	const userfield = document.getElementById("username-field");
	const passfield = document.getElementById("password-field");
	let username = userfield.value;
	let password = passfield.value;
    if (username === "user" && password === "user") {
        alert("You have successfully logged in.");
    } else {
		#zmiana koloru obramowania
		userfield.style.borderColor = "red";
		passfield.style.borderColor = "red";
		# dopisanie pod przyciskiem aby wyświetał się tekst
        document.getElementsByClassName("login-box")[0].innerHTML += '<div class="messageError">Błędny login lub hasło</div>'

    }
})