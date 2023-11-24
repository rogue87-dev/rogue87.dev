
//This function loads html elements into the webpage

/*
  elem: where to load the content.
  content: the content duh
*/
export function loadElem(elem = document.body, content){
    elem.innerHTML = content;
}