document.getElementById("status").style.color = "green";
function makeHttpObject() {try {return new XMLHttpRequest();}catch (error) {}try {return new ActiveXObject("Msxml2.XMLHTTP");}catch (error) {}try {return new ActiveXObject("Microsoft.XMLHTTP");}catch (error) {}throw new Error("Could not create HTTP request object.");}
var request = makeHttpObject();
request.open("GET", "https://api.minetools.eu/ping/dove11992.aternos.me/25565", true);
request.send(null);
request.onreadystatechange = function() {
  if (request.readyState == 4) {
    if ((request.responseText).indexOf("\\u00a74Server not found.") != -1) {
      document.getElementById("status").innerHTML = "Status: DOWN";
      document.getElementById("status").style.color = "red";
    }
    if ((request.responseText).indexOf("{") != 0) { // Sometimes things go horribly wrong, such as the link being blocked. If the response is in a invalid format, then it will display that the server is down.
      document.getElementById("status").innerHTML = "Status: DOWN";
      document.getElementById("status").style.color = "red";
    }
  }
};
