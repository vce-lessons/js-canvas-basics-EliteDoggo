let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');


canv.width = window.innerWidth;
cenv.height = window.innerHeight;


document.body.appendChild(canvOne);


init();

function init (){
loop();   
}


function loop (){
draw();
requestAnimationFrame(loop);

}

function draw (){

    ctx.fillRect(100,100,160,120);

}