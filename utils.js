counter = ""
selected_video_dom = undefined;
push_counter = function(key){
  counter = counter + key;
};
select_video = function(dom){
  if (selected_video_dom){
    selected_video_dom.style['background-color'] = 'inherit';
  } 
  dom.style['background-color'] = 'yellow';
  selected_video_dom = dom;
  _scroll_window(dom);
}
function _scroll_window(obj){
  $('html, body').animate({
    scrollTop: obj.offsetTop - $(window).height()/2,
    scrollLeft: obj.offsetLeft
  });
}
map_key_for_shelf = function(shelf){
  var videos = shelf.querySelectorAll('h3.style-scope.ytd-grid-video-renderer');
  videos.forEach(function(element, index){
    var p = document.createElement('p');
    var linkkey = index +1 ;
		if (linkkey > 9){
			return;
		}
    p.innerText= 'hi, please press (' + linkkey + ')' ;
    p.className = 'hi-limin';
    element.prepend(p);
    key(linkkey.toString(), 'all',function(ev){
      var a = element.querySelectorAll('a')[0];
      console.log(a);
      a.click();
			unbind_all();
      ev.stopPropagation();
      ev.preventDefault();
    });
  })
  shelf.querySelectorAll('a#thumbnail.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail')[0].focus();
}
remove_key_from_shelf= function(shelf){
  var ps = shelf.querySelectorAll('p.hi-limin');
  ps.forEach(function(element, index){
    var linkkey = index;
    element.remove();
    key.unbind(linkkey.toString());
  });
}
unbind_all=function(){
	for(var i=1; i<10; i++){
		key.unbind(i.toString(),'all');
	}
}
