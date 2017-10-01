var shelf = document.querySelectorAll('div#dismissable.ytd-shelf-renderer.style-scope');
console.log(shelf[0]);
var videos = shelf[0].querySelectorAll('h3.style-scope.ytd-grid-video-renderer');
console.log(videos);
videos.forEach(function(element, index){
  var p = document.createElement('p');
  var linkkey = index +1 ;
  p.innerText= 'hi limin, please press (' + linkkey + ')' ;
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
// redirect the focus to youtube logo but not the search blank.
var icon = document.querySelectorAll('input#search')[0];
console.log(icon);
icon.blur();
//shelf.forEach(function(element){
//  var videos =
//  element.querySelectorAll('h3.style-scope.ytd-grid-video-renderer');
//  videos.forEach(function(element, index){
//    var p = document.createElement('p');
//    p.innerText= 'hi limin, please press (' + index + ')' ;
//    element.prepend(p);
//  });
//});

