class Crawler {
    
    static sptMap = new Image();

    static initClass() {
        this.sptMap.src = 'images/character.png';
    }

    constructor (direction) {
        this.currentFrame = {x:0, y:3};  
        this.currentPos = {x:0, y:0};
        this.speed = 1;

        this.dir = direction;
        
        this.frameW = 103.0625;
        this.frameH = 113.125;
    }

    drawFrame ( canvasContext, img ) {

        canvasContext.drawImage(img, 
            this.frameW * this.currentFrame.x, this.frameH * this.currentFrame.y, this.frameW, this.frameH, 
            this.currentPos.x, this.currentPos.y, this.frameW, this.frameH);

        //Jump
        this.currentFrame.x++;
        this.currentFrame.x = this.currentFrame.x < 4 ? 13 : this.currentFrame.x;
        this.currentFrame.x = this.currentFrame.x > 13 ? 4 : this.currentFrame.x;
    }

    setPos (newX, newY) {
        this.currentPos.x = newX;
        this.currentPos.y = newY;
    }
}



const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = new Crawler( 0 );

let sptMap = new Image();
sptMap.src = 'images/character.png';

sptMap.onload = function() {
    window.onload = setInterval(animate, 100);
}



function animate(){
    context.clearRect(0, 0, canvas.height, canvas.width);
    let newX = c.currentPos.x+=6
    if ( newX  > canvas.width) newX = 0;
    c.setPos( newX, 50);
    console.log( newX)
    c.drawFrame( context, sptMap);
}
//ctx.drawImage(crawlerSprite, sX, sY, sW, sH, dX, dY, dW, dH)

//window.onload = setInterval(animate, 1000/39);


