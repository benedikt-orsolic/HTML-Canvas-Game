# HTML Canvas game tutorial notes

* `<canvas id='canvas' height='480' width='640'></canvas>`
* 
`const canvas = document.getElementById('canvasId');`
`const ctx = canvas.getContext('2d');`
* 
`canvas.height = window.innerHeight;`
`canvas.widht = window.innerWidth;`
* 
`const images = {};`
`images.player = new Image();`
`images.player.src = 'player.png';`
* 
`const playerWidth = '*width*';`
`const playerHeight = '*height*';`
`let playerFrameX = '*columnCount*';`
`let playerFrameY = '*rowCount*';`
`let playerPosX = *x ordinate*;`
`let playerPosY = *y ordinate*;`
`const playerSpeed = *speed*;`
* 
`img`
`sX spriteColumn`
`sY spriteRow`
`sW spriteWidth`
`sH spriteHeight`
`dX destinationX`
`dY destiantionY`
`dW destinationWidht`
`dH destinationHeight`
`function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {`
`    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)`
`}`
* 
`function animate() {`
`   ctx.clearRect(0, 0, canvas.width, canvas.height);`
`   drawSprite(images.player, playerWidth*playerFrameX, playerHeight*playerFrameY,`
`              playerWidth, playerHeight, playerPosX, playerPosY, playerWidht, playerHeight);`
`   if( playerFrameX < 13 ) playerFrameX++;`
`   else playerFrameX = 3;`
`   if( playerPosX < canvas.widht + playerWidth) playerX+=playerSpeed;`
`   else playerPosX = 0 - playerWidth;`
`}`
* 
`window.onload = setInterval(animate, 1000/39);`
* 
`windows.addEventListener('resize', function(){`
`   canvas.height = window.innerHeight;`
`   canvas.widht = window.innerWidth;`
`})`

  

# Resources

* https://www.youtube.com/playlist?list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu