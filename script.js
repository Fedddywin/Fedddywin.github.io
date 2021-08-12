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
var cursorCost = 10;

document.getElementById("buyCursorBtn").onclick = function() {
	if (cookieCount >= cursorCost) {
		    cookieCount -= cursorCost;
		    cursorCount++;
		    cps++;
	}
}


