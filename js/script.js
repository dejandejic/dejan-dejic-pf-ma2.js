// question 1

var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];

for (var i = 0; i < pets.length; i++) {
	console.log(pets[i]);
}

// question 2

function logWord(theWord) {
    console.log(theWord);    
}

logWord("Please pass a boolean value in");



// question 3

var heading = document.querySelector("h2");
var button = document.querySelector("button");
button.onclick = changeSubheading;

// console.dir(button); 

function changeSubheading() {
    heading.innerHTML = "Updated subheading";  
    heading.style.color = "blue";  
};




