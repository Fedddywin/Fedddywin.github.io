let click
let y
let cost1
//Storage Check
if (localStorage.getItem("count"))
{
	click = parseInt(localStorage.getItem("count"))
}
else 
{
	click = 0 
}


//clickers per second
setInterval(function () {
	click = click + y
	document.getElementById("counter").innerHTML = click
}, 1000);




//Allows access to counter
document.getElementById("counter").innerHTML = click

//Allows access to 1st Iterate event
document.getElementById("btn").addEventListener("click", iterate)

//Once 25 clicks are reached, allows access to 2nd Iterate Event
while (click >= 25)
{
document.getElementById("btn2").addEventListener("click",iterate2)
}

//If Click is ever up to cost, AutoMouse Appears
while (click >= cost1)
{
	document.getElementById("AutoMouse").addEventListener("click", AutoMouse)
}





//1st iterate event
function iterate(){
	click += 1
	localStorage.setItem("count", click)
	console.log(click)
	document.getElementById("counter").innerHTML = click
}

//2nd Iterate event
function iterate2(){
	click += 2
	localStorage.setItem("count", click)
	console.log(click)
	document.getElementById("counter").innerHTML = click
}

//AutoMouse Function
function AutoMouse() {
	y = y + 1 
	localStorage.setItem("mouses", y)
	console.log(y)
	document.getElementById("AutoMouse").innerHTML = y
	click = click - cost1
	cost1 = cost1 * 1.1
}