// Nested Array/Object
var bio =[
	{
		age: 22,
		sex: 'F',
		location:"US"
	},
	{
		age: 27,
		sex: 'M',
		location: ["US","India"]
	}
];

var someObject = {
	friends: [
		{name: "Malfoy"},
		{name: "Crabbe"},
		{name: "Goyle"}
	],
	color: "baby  blue",
	isEvil: true
};

//Movie database exercise
var movie = [
	{
		title: 	"In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		title: 	"Frozen",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: 	"Mad Max Fury Road",
		rating: 5,
		hasWatched: true
	},
	{
		title: 	"Les Miserables",
		rating: 3.5,
		hasWatched: false
	},
];

function printMov(arr){
	arr.forEach(function(elem){
		if(elem.hasWatched==true){
			console.log("You have watched "+elem.title+" - "+elem.rating+" stars");
		}
		else{
			console.log("You have not watched "+elem.title+" - "+elem.rating+" stars");	
		}
	})
};

var obj = {
	name: "Ank",
	age: 27,
	add: function(x,y){
		return x+y;
	}
};