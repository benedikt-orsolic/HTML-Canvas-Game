let frameTime = 100     //Time in ms each frame is shown ( 1 / frames per second )



window.addEventListener('resize', windowResizeEvent);



let C = document.getElementById('canvas');  // Canvas reference
let ctx = canvas.getContext('2d');          // Context reference

let intervalAnimate = undefined;








function animate(){
    
    context.clearRect(0, 0, C.width, C.height);

}



function rnd (a, b) {
    
    return Math.floor((Math.random() * b) + a);
}



function windowResizeEvent() {
    
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}