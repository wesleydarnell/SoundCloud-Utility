	var url = document.getElementsByTagName('span')[9].style.backgroundImage;
	var name = document.getElementsByTagName('span')[10].innerText;
	
	url = url.split('url("')[1];
	url = url.split('")')[0];
	
	var data = [url, name];
	
	chrome.runtime.sendMessage(data); //sends array of url of cover art, and name of song
	
	//console.log(data);
	//console.log(name);
	//console.log(url);