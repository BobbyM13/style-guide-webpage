const content = document.getElementById("colorcode");
const content2 = document.getElementById("buttoncode");
const button = document.getElementById("show-more");
const button2 = document.getElementById("show-more2");
		
		button.onclick = function() {
		
			if(content.className == "open") {
				//Shrink the Box
				content.className = "";
				button.innerHTML = "Show More";
			} else {
				//Open the Box
				content.className = "open";
				button.innerHTML = "Show Less";
            }
};

        button2.onclick = function() {
            if(content2.className == "open") {
				//Shrink the Box
				content2.className = "";
				button2.innerHTML = "Show More";
			} else {
				//Open the Box
				content2.className = "open";
				button2.innerHTML = "Show Less";
            }
};