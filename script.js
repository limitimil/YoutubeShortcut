var shift_shelf_id = function(distance){
	const unit_offset = distance > 0 ? 1: -1;
	let next_shelf_id = shelf_id + distance;
	while (shelf[next_shelf_id]){
    if( window.getComputedStyle(shelf[next_shelf_id]).display === 'none'){
			next_shelf_id = next_shelf_id + unit_offset;
			continue;
		}
		break;
	}
	if(shelf[next_shelf_id]){
		return next_shelf_id;
	}else {
		return shelf_id;
	}
}
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
	let counter = pop_counter();
	let next = shift_shelf_id(
		counter === 0? 1: counter
	);
	shelf_id = next;
	select_video(shelf[shelf_id]);
	ev.stopPropagation();
	ev.preventDefault();
});
key(';','all', function(ev){
	let counter = pop_counter();
	let next = shift_shelf_id(
		counter === 0? -1: -1 * counter
	);
	shelf_id = next;
	select_video(shelf[shelf_id]);
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
key('enter', 'all', function(ev){
	if (shelf[shelf_id]){
		shelf[shelf_id].querySelector('ytd-thumbnail a').click();
	}
	ev.stopPropagation();
	ev.preventDefault();
});
key('0, 1, 2, 3, 4, 5, 6, 7, 8, 9', 'all', function(ev){
	push_counter(ev.key);
	ev.stopPropagation();
	ev.preventDefault();
});