var pOneBtn = document.getElementById("p1");
var pTwoBtn = document.getElementById("p2");
var rstBtn = document.getElementById("rst");
var spans = document.querySelectorAll("span");

var numInput = document.querySelector("input");

var pOneScore = 0;
var pTwoScore = 0;

var gameOver = false;
var winScore = 5;

pOneBtn.addEventListener("click",function(){
	if (!gameOver) {
		pOneScore+=1;
		if (pOneScore==winScore) {
			gameOver=true;
			spans[0].classList.add("greeen");
			document.body.style.background="rgb(150,250,50)";
		}
		spans[0].textContent = pOneScore;
	};
});

pTwoBtn.addEventListener("click",function(){
	if (!gameOver) {
		pTwoScore+=1;
		if (pTwoScore==winScore) {
			gameOver=true;
			spans[1].classList.add("greeen");
			document.body.style.background="rgb(150,250,50)";
		}
		spans[1].textContent = pTwoScore;
	};
});

rstBtn.addEventListener("click",reset);

function reset(){
	pOneScore = 0;
	pTwoScore = 0;
	spans[0].textContent = 0;
	spans[1].textContent = 0;
	spans[0].classList.remove("greeen");
	spans[1].classList.remove("greeen");
	document.body.style.background="white";
	gameOver=false;
}

numInput.addEventListener("change",function(){
	winScore = numInput.value;
	spans[2].textContent = winScore;
	reset();
});

