var shelf = document.querySelectorAll('div#dismissable.ytd-shelf-renderer.style-scope');
console.log(shelf[0]);
map_key_for_shelf(shelf[0]);
// redirect the focus to youtube logo but not the search blank.
var icon = document.querySelectorAll('input#search')[0];
icon.blur();
var shelf_id = 0;
key('j', function(ev){
  if (shelf_id + 1 < shelf.length){
    remove_key_from_shelf( shelf[shelf_id] );
    map_key_for_shelf(shelf[shelf_id + 1]);
    shelf_id = shelf_id + 1;
  }else{
    shelf = document.querySelectorAll('div#dismissable.ytd-shelf-renderer.style-scope');
  }
});
key('k', function(ev){
  if (shelf_id - 1 >= 0){
    remove_key_from_shelf( shelf[shelf_id] );
    map_key_for_shelf(shelf[shelf_id - 1]);
    shelf_id = shelf_id - 1;
  }
});
