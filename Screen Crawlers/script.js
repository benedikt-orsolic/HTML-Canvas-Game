
let maxCrawlers = 5     //Number of crawlers
let frameTime = 100     //Time in ms each frame is shown ( 1 / frames per second )



window.addEventListener('resize', windowResizeEvent);



class Crawler {

    static sptMap = undefined   //Sprite sheet
    static cRef = undefined     //Canvas referenc
    static ctxRef = undefined   //Cavans context referenc
    
    constructor (direction) {
        
        this.currentFrame = {x:0, y:3};  
        this.currentPos = {x:0, y:0};
        this.speed = 6;

        this.dir = direction;
        
        this.frameW = 103.0625;
        this.frameH = 113.125;

        this.initFirstFrame();
    }

    drawFrame () {
        
        Crawler.ctxRef.drawImage(Crawler.sptMap, 
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
                console.warn("Uknown direction: " + String(this.direction) );
                break;
        }

        if( this.currentPos.x + this.frameW > 0 &&
            this.currentPos.x - this.frameW < Crawler.cRef.width + 1 &&
            this.currentPos.y + this.frameH > 0 &&
            this.currentPos.y < Crawler.cRef.height ) return 0;
        else return 1;
    }



    initFirstFrame( ) {
        
        switch( this.dir ) {
            /* Up */
            case 0:

                this.currentPos.x = rnd(0, Crawler.cRef.width);
                this.currentPos.y = Crawler.cRef.height;

                this.currentFrame.x = 3;
                this.currentFrame.y = 0;
                break;

            /* Left Up */
            case 1:
                if( rnd(0,10) < 5 ) {

                    this.currentPos.x = Crawler.cRef.width;
                    this.currentPos.y = rnd(0 - this.frameH, Crawler.cRef.height);
                } else {

                    this.currentPos.x = rnd(0 -this.frameW, Crawler.cRef.width);
                    this.currentPos.y = Crawler.cRef.height;
                }

                this.currentFrame.x = 3;
                this.currentFrame.y = 9;
                break;

            /* Left */
            case 2:
                
            this.currentPos.x = Crawler.cRef.width;
                this.currentPos.y = rnd(0 - this.frameH, Crawler.cRef.height);

                this.currentFrame.x = 12;
                this.currentFrame.y = 11;
                break;

            /* Left Down */
            case 3:

                if( rnd(0,10) < 5 ) {
                    
                    this.currentPos.x = rnd(0 - this.frameW, Crawler.cRef.width);
                    this.currentPos.y = 0 - this.frameH;
                } else {
                    
                    this.currentPos.x = Crawler.cRef.width;
                    this.currentPos.y = rnd(0 - this.frameH, Crawler.cRef.height);
                }

                this.currentFrame.x = 11;
                this.currentFrame.y = 12;
                break;

            /* Down */
            case 4:
                
                this.currentPos.x = rnd(0 - this.frameW, Crawler.cRef.width);
                this.currentPos.y = 0 - this.frameH;

                this.currentFrame.x = 0;
                this.currentFrame.y = 6;
                break;

            /* Rigtht Down */
            case 5:
                
                if( rnd(0,10) < 5 ) {
                    
                    this.currentPos.x = 0 - this.frameW;
                    this.currentPos.y = rnd(0 - this.frameH, Crawler.cRef.height);
                } else {
                    
                    this.currentPos.x = rnd(0 - this.frameW, Crawler.cRef.width);
                    this.currentPos.y = 0 - this.frameH;
                }

                this.currentFrame.x = 4;
                this.currentFrame.y = 4;
                break;

            /* Right */
            case 6:
                
                this.currentPos.x = 0 - this.frameW;
                this.currentPos.y = rnd(0 - this.frameH, Crawler.cRef.height);

                this.currentFrame.x = 3;
                this.currentFrame.y = 3;
                break;

            /* Right Up */
            case 7: 
                
                if( rnd(0,10) < 5 ) {
                    
                    this.currentPos.x = 0 - this.frameW;
                    this.currentPos.y = rnd(0 - this.frameH, Crawler.cRef.height);
                } else {
                    
                    this.currentPos.x = rnd(0 - this.frameW, Crawler.cRef.width);
                    this.currentPos.y = Crawler.cRef.height;
                }

                this.currentFrame.x = 3;
                this.currentFrame.y = 1;
                break;

            case 8:
                break;
            default:

                console.warn("Uknown direction: " + String(this.direction) );
                break;
        }
    }
}



let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

windowResizeEvent()

let crawlerList = [];

let spriteSheet = new Image();
spriteSheet.src = 'images/character.png';

let intervalAnimate = undefined;



spriteSheet.onload = function() {
    
    Crawler.sptMap = spriteSheet
    Crawler.cRef = document.getElementById('canvas')
    Crawler.ctxRef = Crawler.cRef.getContext('2d')

    genrateCrawlers();
    intervalAnimate = setInterval(animate, frameTime);
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
        
        if( crawlerList[i].drawFrame() ) {
            
            crawlerList[i] = new Crawler( rnd(0, 7), canvas.width, canvas.height);
        }
    }
}



function windowResizeEvent() {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}