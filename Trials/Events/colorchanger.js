var btn = document.querySelector("button");
var isGreen = false;

btn.addEventListener("click",tgl);

// Method 1
function clr(){
	if(isGreen){
		document.body.style.background="white";
	}
	else{
		document.body.style.background="rgb(150,250,50)";
	}
	isGreen = !isGreen;
}

// Method 2
function tgl(){
	document.body.classList.toggle("purple");
};