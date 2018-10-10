


//var name = document.getElementById("name");

var ul = document.getElementById("list");
var button = document.getElementById("button");

function Myfunction(){
	
	var name = document.getElementById("name");
	var lastName = document.getElementById("lastName");
	var edad = document.getElementById("age");
	var email = document.getElementById("mail");	
	

	if(name.value ===""){
		alert("campo nombre vacio");
	}
	if(lastName.value===""){
		alert("campo apellido  vacio");
	}
	if(edad.value ===""){
		alert("campo eda vacio");
	}
	if(mail.value ===""){
		alert("campo email vacio");
	}
	else{


		var text1  = document.createElement("li");
		text1.appendChild(document.createTextNode(name.value));	
		ul.appendChild(text1);
		

	
		var text2 = document.createElement("li");
		text2.appendChild(document.createTextNode(lastName.value));
		ul.appendChild(text2);
	
			var text3 = document.createElement("li");
		text3.appendChild(document.createTextNode(age.value));
		ul.appendChild(text3);
	

		var text4 = document.createElement("li");
		text4.appendChild(document.createTextNode(mail.value));
		ul.appendChild(text4);
		var card2 = document.getElementById("box");	
	

		if(age.value >= 18){
			card2.classList.toggle("green");

		}
		else{
			card2.classList.toggle("orange");
		}
		
		
	}

	
	




}



button.addEventListener('click', Myfunction);
