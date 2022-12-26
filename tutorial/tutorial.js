
function getPosition0(element_id) {
  let element = document.getElementById(element_id); 
  let _x = 0;
  let _y = 0;
  while(element && !isNaN(element.offsetLeft ) && !isNaN(element.offsetTop)) {
    _x += element.offsetLeft - element.scrollLeft;
    _y += element.offsetTop - element.scrollTop;
    element = element.offsetParent;
  }
  return { top: _y, left: _x };
}

// https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
function getPosition(element_id) {
  let _y = window.scrollY + document.querySelector('#'+element_id).getBoundingClientRect().top;
  let _x = window.scrollX + document.querySelector('#'+element_id).getBoundingClientRect().left;
  return { top: _y, left: _x };
}

function popup(element_where, element_what) {
  let pos = getPosition(element_where);
  show(element_what, pos.top, pos.left);
}

function show(element_id, top, left) {
  let element = document.getElementById(element_id);
  element.style.top = top+"px";                      // .style.setProperty("top", top+"px");
  element.style.left = left+"px";                    // .style["left"] = left+"px";
  element.style.visibility = "visible";
}