_counter = ""
selected_video_dom = undefined;
push_counter = function(key){
  _counter = _counter + key;
};
pop_counter = function(){
  if (_counter === ''){
    return 0;
  }
  let result = parseInt(_counter);
  _counter = '';
  return result
}
select_video = function(dom){
  if (selected_video_dom){
    selected_video_dom.style['outline'] = 'inherit';
  } 
  dom.style['outline'] = '1px solid yellow';
  selected_video_dom = dom;
  scroll_window(dom);
}
function scroll_window(obj){
  $('html, body').animate({
    scrollTop: obj.offsetTop - $(window).height()/2,
    scrollLeft: obj.offsetLeft
  });
}