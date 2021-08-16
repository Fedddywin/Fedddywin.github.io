
let x = 0
document.getElementById("counter").innerHTML = x
document.getElementById("btn").addEventListener("click", iterate)

function iterate(){
	x += 1
	console.log(x)
	document.getElementById("counter").innerHTML = x
}