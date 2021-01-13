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
            /* Up */
            case 0:
                /* Move */this.currentPos.y -= this.speed;

                /* Frame */this.currentFrame.x++; this.currentFrame.x = this.currentFrame.x > 15 ? 3 : this.currentFrame.x;
                break;
            /* Left Up */
            case 1:
                /* Move */this.currentPos.x -= this.speed; this.currentPos.y -= this.speed;

                /* Frame */this.currentFrame.x = --this.currentFrame.x <= 1 ? 12 : this.currentFrame.x;
                break;
            /* Left */
            case 2:
                /* Move */this.currentPos.x -= this.speed;

                /* Frame */this.currentFrame.x = --this.currentFrame.x <= 2 ? 12 : this.currentFrame.x;
                break;
            /* Left Down */
            case 3:
                /* Move */this.currentPos.x -= this.speed; this.currentPos.y += this.speed;

                /* Frame */this.currentFrame.x = --this.currentFrame.x <= 0 ? 11 : this.currentFrame.x;
                break;
            /* Down */
            case 4:
                /* Move */this.currentPos.y += this.speed;

                /* Frame */this.currentFrame.x = ++this.currentFrame.x >= 13 ? 0 : this.currentFrame.x;
                break;
            /* Rigtht Down */
            case 5:
                /* Move */this.currentPos.x += this.speed; this.currentPos.y += this.speed;

                /* Frame */this.currentFrame.x = ++this.currentFrame.x >= 15 ? 4 : this.currentFrame.x;
                break;
            /* Right */
            case 6:
                /* Move */this.currentPos.x += this.speed;
                
                /* Frame */this.currentFrame.x = ++this.currentFrame.x >= 13 ? 3 : this.currentFrame.x;
                break;
            /* Right Up */
            case 7: 
                /* Move */this.currentPos.x += this.speed; this.currentPos.y -= this.speed;
                
                /* Frame */this.currentFrame.x = ++this.currentFrame.x >= 14 ? 3 : this.currentFrame.x;
                break;
            case 8:
                break;
            default:
                console.log("Uknown direction: " + String(this.direction) );
        }

        //console.log("current: x = " + String( this.currentPos.x ) + "; fW = " + String( this.frameW ) + "; CanvasW = " +  String( this.canvasW ) + ": Test = " + ((this.currentPos.x + this.frameW) > this.canvasW) ) ;

        if( this.currentPos.x + this.frameW > 0 &&
            this.currentPos.x - this.frameW < this.canvasW + 1 &&
            this.currentPos.y + this.frameH > 0 &&
            this.currentPos.y < this.canvasH ) return 0;
        else return 1;
    }

    initFirstFrame( ) {
        switch( this.dir ) {
            case 0:
                //this.currentPos.x = 0 < rnd < canvasH;
                this.currentPos.y = this.canvasH;

                this.currentFrame.x = 3;
                this.currentFrame.y = 0;
                break;
            case 1:
                this.currentPos.x = this.canvasW;
                this.currentPos.y = this.canvasH;

                this.currentFrame.x = 3;
                this.currentFrame.y = 9;
                break;
            case 2:
                this.currentPos.x = this.canvasW;
                //this.currentPos.y = this.canvasH;

                this.currentFrame.x = 12;
                this.currentFrame.y = 11;
                break;
            case 3:
                this.currentPos.x = this.canvasW;
                this.currentPos.y = 0 - this.frameH;

                this.currentFrame.x = 11;
                this.currentFrame.y = 12;
                break;
            case 4:
                //this.currentPos.x = 0 < rnd < canvasH;
                this.currentPos.y = 0 - this.frameH;

                this.currentFrame.x = 0;
                this.currentFrame.y = 6;
                break;
            case 5:
                this.currentPos.x = 0 - this.frameW;
                this.currentPos.y = 0 - this.frameH;

                this.currentFrame.x = 4;
                this.currentFrame.y = 4;
                break;
            case 6:
                this.currentPos.x = 0 - this.frameW;
                //this.currentPos.y = 0 < rnd < canvasH

                this.currentFrame.x = 3;
                this.currentFrame.y = 3;
                break;
            case 7: 
                this.currentPos.x = 0 - this.frameW;
                this.currentPos.y = this.canvasH;

                this.currentFrame.x = 3;
                this.currentFrame.y = 1;
                break;
            case 8:
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

let crawlerList = [];
let maxCrawlers = 15;
//Tested direction 0, 1, 2, 3, 4, 5, 6, 7
let dir = 0
let c = new Crawler( 0, canvas.width, canvas.height );
let c1 = new Crawler( 5, canvas.width, canvas.height );

let sptMap = new Image();
sptMap.src = 'images/character.png';

let intervalAnimate = undefined;



sptMap.onload = function() {
    genrateCrawlers();
    intervalAnimate = setInterval(animate, 100);
}


function genrateCrawlers() {
    while( crawlerList.length < maxCrawlers ) {
        crawlerList.push( new Crawler( rnd(0, 7), canvas.width, canvas.height) );
    }
}



function rnd (a, b) {
    return Math.floor((Math.random() * b) + a);
}



function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCrawlers();
}



function drawCrawlers() {
    for( var i = 0; i < crawlerList.length; i++ ) {
        
        crawlerList[i].drawFrame( context, sptMap );
        console.log( crawlerList[i].dir )
        
    }
}
//ctx.drawImage(crawlerSprite, sX, sY, sW, sH, dX, dY, dW, dH)

//window.onload = setInterval(animate, 1000/39);


