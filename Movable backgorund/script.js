const canRef = document.getElementById('canvas');
const ctxRef = canRef.getContext("2d")

canRef.height = window.innerHeight
canRef.width = window.innerWidth

let offsetX = canRef.width / 2;
let offsetY = canRef.height / 2;

let mouseMoveStartX = 0;
let mouseMoveStartY = 0;

class Rect {

    static ctxRef = null;

    constructor (x, y, w, h) {
        this.x = x;
        this.y = y;

        this.width = w
        this.height = h
    }

    drawMe() {
        Rect.ctxRef.beginPath();
        Rect.ctxRef.lineWidth = "5";
        Rect.ctxRef.strokeStyle = "blue";
        Rect.ctxRef.rect(this.x + offsetX, this.y + offsetY, this.height, this.width);
        Rect.ctxRef.stroke();
    }
}

Rect.ctxRef = ctxRef

let rectList = [];


document.getElementById("canvas").addEventListener("click", mouseClicked)
document.getElementById("canvas").addEventListener("mousemove", mouseMove)


setInterval(render, 100);


function mouseClicked(e){
    if( e.button == 0) {
        rectList.push( new Rect( e.clientX - offsetX, e.clientY - offsetY, 100, 100))
    }
}

function mouseMove(e) {
    console.log( offsetX )
    if( e.buttons == 2 ) {
        offsetX += e.movementX
        offsetY += e.movementY
    }
}

function render() {
    ctxRef.clearRect(0, 0, canRef.width, canRef.height);

    for( let i = 0; i < rectList.length; i++ ) {
        rectList[i].drawMe( 0, 0 )
        /*if( rectList[i].x + offestX < 0 || rectList[i].x + offestX > canRef.width ||
            rectList[i].y + offestY < 0 || rectList[i].y + offestY > canRef.height ){
                //Nothing if out of frame
        } else {
            rectList[i].drawMe( offsetX, offestY )
        }*/
    }
}