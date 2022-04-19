function myFunction() {
	var x = document.getElementById("new_pasword");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

function myFunction2() {
	var x = document.getElementById("confirm_pasword");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}