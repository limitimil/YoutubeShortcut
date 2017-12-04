var reset = function(){
	try{
		remove_key_from_shelf( shelf[shelf_id] );
	}catch(err){
		console.log(err)
	}
	shelf_id = 0;
	shelf = document.querySelectorAll('div#dismissable.ytd-shelf-renderer.style-scope');
	map_key_for_shelf(shelf[shelf_id]);
}
try {
	var shelf = document.querySelectorAll('div#dismissable.ytd-shelf-renderer.style-scope');
	var logo = $('div#logo-icon-container');
	console.log(shelf[0]);
	map_key_for_shelf(shelf[0]);
}catch(err){
	console.log(err)
}
// redirect the focus to youtube logo but not the search blank.
var icon = document.querySelectorAll('input#search')[0];
icon.blur();
var shelf_id = 0;
key('j','all', function(ev){
  if (shelf_id + 1 < shelf.length){
    remove_key_from_shelf( shelf[shelf_id] );
    map_key_for_shelf(shelf[shelf_id + 1]);
    shelf_id = shelf_id + 1;
  }else{
    shelf = document.querySelectorAll('div#dismissable.ytd-shelf-renderer.style-scope');
  }
	ev.stopPropagation();
	ev.preventDefault();
});
key('k','all', function(ev){
  if (shelf_id - 1 >= 0){
    remove_key_from_shelf( shelf[shelf_id] );
    map_key_for_shelf(shelf[shelf_id - 1]);
    shelf_id = shelf_id - 1;
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
