function Redirect() {
	//Get the age from the html input
	var age = document.getElementById("age").value;
	
	//Starting the If/Else Statement to access the website
	if (age >= 16) { 
		window.location.href = "yes.html"; 
	}
	else { 
		window.location.href = "no.html";
	}			
}