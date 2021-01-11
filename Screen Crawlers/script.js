class Crawler {
    constructor (direction, canvasW, canvasH) {
        this.currentFrame = {x:0, y:3};  
        this.currentPos = {x:0, y:0};
        this.speed = 6;

        this.dir = direction;

        
        this.frameW = 103.0625;
        this.frameH = 113.125;

        this.canvasW = canvasW;
        this.canvasH = canvasH;

        this.initFirstFrame();
    }

    drawFrame ( canvasContext, img ) {

        canvasContext.drawImage(img, 
            this.frameW * this.currentFrame.x, this.frameH * this.currentFrame.y, this.frameW, this.frameH, 
            this.currentPos.x, this.currentPos.y, this.frameW, this.frameH);

        switch( this.dir ) {
            case 0:
                this.currentPos.y -= this.speed;
                break;
            case 1:
                this.currentPos.x -= this.speed; this.currentPos.y -= this.speed;
                break;
            case 2:
                this.currentPos.x -= this.speed;
                break;
            case 3:
                this.currentPos.x -= this.speed; this.currentPos.y += this.speed;
                break;
            case 4:
                this.currentPos.y += this.speed;
                break;
            case 5:
                this.currentPos.x += this.speed; this.currentPos.y += this.speed;
                break;
            case 6:
                this.currentPos.x += this.speed;
                
                this.currentFrame.x++;
                this.currentFrame.x = this.currentFrame.x > 13 ? 4 : this.currentFrame.x;
                break;
            case 7: 
                this.currentPos.x += this.speed; this.currentPos.y += this.speed;
                break;
            case 6:
                break;
            default:
                console.log("Uknown direction: " + String(this.direction) );
        }

        //console.log("current: x = " + String( this.currentPos.x ) + "; fW = " + String( this.frameW ) + "; CanvasW = " +  String( this.canvasW ) + ": Test = " + ((this.currentPos.x + this.frameW) > this.canvasW) ) ;

        if( this.currentPos.x - this.frameW < this.canvasW) return 0;
        else return 1;
    }

    initFirstFrame( ) {
        switch( this.dir ) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                this.currentPos.x = 0 - this.frameW;
                //this.currentPos.y = 0 < rnd < canvasH
                break;
            case 7: 
                break;
            case 6:
                break;
            default:
                console.log("Uknown direction: " + String(this.direction) );
        }
    }
}



const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = new Crawler( 6, canvas.width, canvas.height );

let sptMap = new Image();
sptMap.src = 'images/character.png';

let intervalAnimate = undefined;



sptMap.onload = function() {
    intervalAnimate = setInterval(animate, 100);
}



function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    if( !c.drawFrame( context, sptMap) ) {

    } else {
        clearInterval( intervalAnimate );
    }
    
}
//ctx.drawImage(crawlerSprite, sX, sY, sW, sH, dX, dY, dW, dH)

//window.onload = setInterval(animate, 1000/39);


