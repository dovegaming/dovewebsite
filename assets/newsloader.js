var newsfile;
newsfile = new XMLHttpRequest();
newsfile.open('GET', "newsfile", false);
newsfile.send();
document.getElementById("news").innerHTML = newsfile.responseText;
