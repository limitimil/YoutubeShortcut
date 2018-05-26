var contextMenuItem = {
	"id": "goVideo",
	"title": "go Video...",
	"contexts": ["link"]
}
function videoUrl(url){
	var uri = URI(url);
	
	return uri.setSearch("list", "").toString();

}
chrome.contextMenus.create(contextMenuItem)

chrome.contextMenus.onClicked.addListener(function(clickData, tabs){
	if (clickData.menuItemId == "goVideo" && clickData.linkUrl){
		chrome.tabs.sendMessage(tabs.id, {go: videoUrl(clickData.linkUrl)}, function(response) {
			console.log(tabs.id);
		});
	}
});
