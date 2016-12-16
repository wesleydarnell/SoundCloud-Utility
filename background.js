window.onload = function(){ 
	
	//"gets" popup
	var views = chrome.extension.getViews({ type: "popup" });
	var song_name;

	//Finds current url, searches for soundcloud url, shows page action
	function showIcon(){
		chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
			var current_url = tabs[0].url;
			if (current_url.search("https://soundcloud.com/") != -1)
			{
			chrome.pageAction.show(tabs[0].id);
			}
		});
	};
	//checks for tab update
	chrome.tabs.onUpdated.addListener(showIcon);
	
	//checks if popup is open
	if (views != 0){
	chrome.tabs.executeScript(null, {file: "content.js"}); //injects content script when popup is open
	}
	
	document.getElementById("copyname").addEventListener("click", function() {window.prompt("", song_name);});
	
	chrome.runtime.onMessage.addListener( //receives message from content script
		function(data) {
			//console.log("Message successful");
			console.log(data[0]);
			//url
			document.getElementById("art_url").href = data[0];
			//name
			song_name = data[1];
		}
	);
};