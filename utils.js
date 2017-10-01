map_key_for_shelf = function(shelf){
  var videos = shelf.querySelectorAll('h3.style-scope.ytd-grid-video-renderer');
  videos.forEach(function(element, index){
    var p = document.createElement('p');
    var linkkey = index +1 ;
    p.innerText= 'hi limin, please press (' + linkkey + ')' ;
    p.className = 'hi-limin';
    element.prepend(p);
    key(linkkey.toString(), function(ev){
      console.log(element);
      var a = element.querySelectorAll('a')[0];
      console.log(a);
      a.click();
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
    //key.unbind(linkkey.toString());
  });
}
