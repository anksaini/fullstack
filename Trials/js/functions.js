function isEven(n){
	return n%2==0;
}

var factorial=function(n){
	var m = 1;
	while(n>=1){
		m=m*n;
		n--;
	}
	return m;
}

var kebabToSnake=function(str){
	return str.replace("-","_")
}