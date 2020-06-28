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
  scroll_window(dom);
}
function scroll_window(obj){
  $('html, body').animate({
    scrollTop: obj.offsetTop - $(window).height()/2,
    scrollLeft: obj.offsetLeft
  });
}