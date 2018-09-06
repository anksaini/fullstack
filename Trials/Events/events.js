var btn = document.getElementsByTagName("button");
var para = document.getElementsByTagName("p");
var body = document.querySelector("body");

btn[0].addEventListener("click",function(){
	para[0].textContent = "Some-f***ing-body clicked me!";
});

var lis = document.querySelectorAll("li");
for(var i=0;i<lis.length;i++){
	lis[i].addEventListener("click",function(){
		this.style.background="pink";
});
}