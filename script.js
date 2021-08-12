var cookieCount = 0;
var cookie = document.getElementById("cookie");

cookie.onclick = function() {
    cookieCount++;
    alert(cookieCount);
    
}
var countElement = document.getElementById("count");


cookie.onclick = function() {
    cookieCount++
    countElement.innerHTML = cookieCount;
}

var cps = 0;
var cursorCount = 0;
var cursorCost = 0;

document.getElementById("buyCursorBtn").onclick = function() {
	if (cookieCount >= cursorCost) {
		cookieCount -= cursorCost;
		cursorCount++;
		cps++;
	}
}

cursorCountElement = document.getElementById("cursorCount");
setInterval(function() {
	cookieCount += cps;
	countElement.innerHTML = cookieCount;
},1000);
document.getElementById("buyCursorBtn").onclick = function() {
	cookieCount -= cursorCost;
	countElement.innerHTML = cookieCount;
	cursorCount++;
	cursorCountElement.innerHTML = cursorCount;
	cps++;
}
