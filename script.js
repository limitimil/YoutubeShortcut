var reset = function(){
	shelf_id = 0;
	select_video(shelf[shelf_id]);
}
try {
	var shelf = document.querySelectorAll('ytd-rich-item-renderer');
	var logo = $('div#logo-icon-container');
	select_video(shelf[0]);
}catch(err){
	console.log(err)
}
// redirect the focus to youtube logo but not the search blank.
var icon = document.querySelectorAll('input#search')[0];
icon.blur();
var shelf_id = 0;
key('\'','all', function(ev){
  if (shelf_id + 1 < shelf.length){
		shelf_id = shelf_id + 1;
		select_video(shelf[shelf_id]);
	}
	ev.stopPropagation();
	ev.preventDefault();
});
key(';','all', function(ev){
  if (shelf_id - 1 >= 0){
    shelf_id = shelf_id - 1;
		select_video(shelf[shelf_id]);
  }
	ev.stopPropagation();
	ev.preventDefault();
});
key('h','all', function(ev){
	logo.click();

	setTimeout(function() {
		reset();
	}, 2500);
	ev.stopPropagation();
	ev.preventDefault();
});
key('r','all', function(ev){
	reset();
	ev.stopPropagation();
	ev.preventDefault();
});
key('C','all', function(ev){
	unbind_all();
	ev.stopPropagation();
	ev.preventDefault();
});
