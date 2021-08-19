let x


if (localStorage.getItem("count"))
{
	x = parseInt(localStorage.getItem("count"))
}
else 
{
	x = 0 
}

document.getElementById("counter").innerHTML = x
document.getElementById("btn").addEventListener("click", iterate)
document.getElementById("btn2").addEventListener("click",iterate2)

function iterate(){
	x += 1
	localStorage.setItem("count", x)
	console.log(x)
	document.getElementById("counter").innerHTML = x
}

function iterate2(){
	x += 2
	localStorage.setItem("count", x)
	console.log(x)
	document.getElementById("counter").innerHTML = x
}
