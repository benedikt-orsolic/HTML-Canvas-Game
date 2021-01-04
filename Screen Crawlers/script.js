class Crawler {
    
    static sptMap = new Image();

    static initClass() {
        this.sptMap.src = 'images/character.png';
    }

    constructor (direction) {
        this.currentFrame = {x:0, y:7};  
        this.dir = direction;
        
        this.frameW = 103.0625;
        this.frameH = 113.125;
    }

    drawFrame ( canvasContext, frameX, frameY, img ) {

        canvasContext.drawImage(img, 
            this.frameW * this.currentFrame.x, this.frameH * this.currentFrame.y, this.frameW, this.frameH, 
            frameX, frameY, this.frameW*1.5, this.frameH*1.5);

        //Jump
        this.currentFrame.x++;
        this.currentFrame.x = this.currentFrame.x < 0 ? 4 : this.currentFrame.x;
        this.currentFrame.x = this.currentFrame.x > 4 ? 0 : this.currentFrame.x;
    }
}



const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

Crawler.initClass();
let c = new Crawler( 0 );

let sptMap = new Image();
sptMap.src = 'images/character.png';

sptMap.onload = function() {
    window.onload = setInterval(animate, 100);
}



function animate(){
    context.clearRect(0, 0, canvas.height, canvas.width);
    c.drawFrame( context, 50, 50, sptMap);
}
//ctx.drawImage(crawlerSprite, sX, sY, sW, sH, dX, dY, dW, dH)

//window.onload = setInterval(animate, 1000/39);


