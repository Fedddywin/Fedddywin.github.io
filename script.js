let x

//Storage Check
if (localStorage.getItem("count"))
{
	x = parseInt(localStorage.getItem("count"))
}
else 
{
	x = 0 
}

//Allows access to counter
document.getElementById("counter").innerHTML = x

//Allows access to 1st Iterate event
document.getElementById("btn").addEventListener("click", iterate)

//Once 25 clicks are reached, allows access to 2nd Iterate Event
while (x >= 25)
{
document.getElementById("btn2").addEventListener("click",iterate2)
}

//1st iterate event
function iterate(){
	x += 1
	localStorage.setItem("count", x)
	console.log(x)
	document.getElementById("counter").innerHTML = x
}

//2nd Iterate event
function iterate2(){
	x += 2
	localStorage.setItem("count", x)
	console.log(x)
	document.getElementById("counter").innerHTML = x
}