// var arr_char=["a","b","a","a"];
// var arr_num=[-1,2,-1,1,500,2,99];

// var printReverse = function(arr){
// 	var idx = arr.length-1;
// 	arr.forEach(function(){
// 		console.log(arr[idx]);
// 		idx--;
// 	})
// }

// function isUniform(arr){
// 	var elem = arr[0];
// 	for(var i=1;i<arr.length;i++){
// 		if(arr[i]!=elem){
// 			return false;
// 		}
// 	}
// 	return true;
// };

// function sumArray(arr){
// 	var sum = 0;
// 	arr.forEach(function(elem){
// 		sum+=elem;
// 	})
// 	return sum;
// }

// var max = function(arr){
// 	var max=arr[0];
// 	arr.forEach(function(elem){
// 		if(elem>max){
// 			max = elem;
// 		}
// 	})
// 	return max;
// }

var nums = [3,1,2,4];

// nums.forEach(function (num){
// 	console.log(num);
// })

function myfunc(arr,func){
	for(var i =0;i<arr.length;i++){
		func(arr[i]);
	};
}

myfunc(nums,function(x){
	console.log(x);
});