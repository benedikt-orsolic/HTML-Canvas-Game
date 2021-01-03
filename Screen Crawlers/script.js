const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let crawlerSprite = new Image();
crawlerSprite.src = 'images/character.png';
let frameWidth = 103.0625;
let frameHeight = 113.125;
let currentFrame = {x:0, y:7};

context.fillRect( 50, 50, 100, 100);

crawlerSprite.onload = function() {
    window.onload = setInterval(animate, 100);
}

function animate(){
    context.clearRect(0, 0, canvas.height, canvas.width);
    context.drawImage(crawlerSprite, frameWidth*currentFrame.x, frameHeight*currentFrame.y, frameWidth, frameHeight, 25, 25, frameWidth*2, frameHeight*2);
    currentFrame.x++;
    if( currentFrame.x > 4) currentFrame.x = 0;
}
//ctx.drawImage(crawlerSprite, sX, sY, sW, sH, dX, dY, dW, dH)

//window.onload = setInterval(animate, 1000/39);