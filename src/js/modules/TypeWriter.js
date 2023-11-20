// export function write(elem = document.body ,text = 'lorem ipsum ler', speed = 50){
//   elem.innerText = '';  //the html element you want to write text on. acts like a piece of paper.
//   let pen = 0;  //this is the thing you use to write stuff on paper.

//   function movePen(){
//     if(pen < text.length){
//       elem.textContent += text.charAt(pen);
//       pen++;
//     }
//     const timeoutId = setTimeout(movePen, speed);
//     console.log(`pen: ${pen}. text: ${text.length}`);
    
//     if(pen === text.length){
//       clearTimeout(timeoutId);
//       console.log('test');
//       return () => {console.log("end");};
//     }
//   }
//   if(pen < text.length -1)  movePen();
// }S




/* better algorithm
  speed: millisecond
  text : string
  elem : HTML Element
*/
let running = false
export function write(elem = document.body, text = 'lorem', speed = 50){
  if(running){
    return;
  }
  running = true;
  console.log('running!');
  elem.innerText = '';
  let pen = 0;

  const intervalId = setInterval(()=>{
    elem.textContent += text.charAt(pen);
    pen++ 
    
    if(pen >= text.length){
      clearInterval(intervalId);
      console.log(`pen: ${pen}. text: ${text.length}`);
      running = false
      console.log('no longer running');
    }

  },speed);
}