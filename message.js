chrome.runtime.onMessage.addListener(function( msg, _, sendResponse){
	console.log(msg);
	window.location.href = msg['go']
});
