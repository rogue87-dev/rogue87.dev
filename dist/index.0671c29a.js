const t=["Hello Stranger","Clickity Clackity","You ain't getting bored of this?","Why not click the other buttons then?","booooring"],e=document.querySelector("#grid-container .grid-elem:nth-child(1)");e.addEventListener("click",()=>(function(t=document.body,e="lorem ipsum ler",n=50){t.innerText="";//the html element you want to write text on. acts like a piece of paper.
    let o=0;//this is the thing you use to write stuff on paper.
    0<e.length-1&&function l(){o<e.length&&(t.textContent+=e.charAt(o),o++);let i=setTimeout(l,n);if(console.log(`pen: ${o}. text: ${e.length}`),o===e.length)return clearTimeout(i),console.log("test"),()=>{console.log("end")}}()})(e,function(){let e=Math.round(Math.random()*(t.length-1));return t[e]}(),50));//# sourceMappingURL=index.0671c29a.js.map

//# sourceMappingURL=index.0671c29a.js.map
