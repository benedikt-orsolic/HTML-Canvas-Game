let frameTime = 100    //Time in ms each frame is shown ( 1 / frames per second )



window.addEventListener('resize', windowResizeEvent)
window.addEventListener('load', () => {
    intervalAnimate = setInterval(animate, frameTime)
    windowResizeEvent()
    Character.ctx = ctx
});
document.addEventListener('keydown', keyboardEvent)

document.addEventListener("click", mouseClicked)


let C = document.getElementById('canvas') // Canvas reference
let ctx = C.getContext('2d')         // Context reference

let intervalAnimate = undefined



class Character {

    static ctx = undefined
    static playerColor = "green"
    static zombieColor = "red"
    static defaultColor = "black"
    static radius = 15

    constructor ( X, Y, damage, health, speed, isPlayer) {
        this.x = X
        this.y = Y

        this.damage = damage
        this.maxHealth = health 
        this.health = health

        this.speed = speed

        this.isplayer = isPlayer
    }

    drawMe() {
        
        Character.ctx.beginPath();
        Character.ctx.arc(this.x, this.y, Character.radius, 0, 2*Math.PI);

        let color = undefined
        switch( this.isplayer ) {
            case 0:
                color = Character.playerColor
                break;
            case 1:
                color = Character.zombieColor
                break
            default:
                color = Character.defaultColor
                break;
        }

        Character.ctx.fillStyle = "red";
        Character.ctx.fill();
    }
}

class Bullet {

    static speed = 3
    static radius = 5

    constructor (x, y, damage, angle) {
        
        this.damage = damage 
        this.speedX = Math.sin( angle ) * Bullet.speed
        this.speedY = Math.cos( angle ) * Bullet.speed

        this.x = x 
        this.y = y 
    }

    move () {
        this.x += this.speedX
        this.y += this.speedY
    }

    drawMe() {
        Character.ctx.beginPath()
        Character.ctx.arc(this.x, this.y, Bullet.radius, 0, 2*Math.PI)
        Character.ctx.fillStyle = "black"
        Character.ctx.fill()

        this.move()
    }
}



var offset = { x:0, y:0 }
var player = new Character( 0, 0, 4, 100, 4 , 0)
var zombieList = []
var bulletList = []







function animate(){
    
    ctx.clearRect(0, 0, C.width, C.height)
    player.drawMe()
    for( let i = 0; i < bulletList.length; i++ ) {
        bulletList[i].drawMe()
    }
}



function keyboardEvent(e) {
    if ( e.key == "a") {
        player.x -= player.speed
    }
    if ( e.key == "s" ) {
        player.y += player.speed 
    }
    if ( e.key == "d" ) {
        player.x += player.speed 
    }
    if( e.key == "w" ) {
        player.y -= player.speed
    }
}



function mouseClicked(e){
    if( e.button == 0) {
        
        let deltaX = e.clientX - player.x
        let deltaY = player.y - e.clientY
        let angle = Math.atan2( deltaY, deltaX ) + Math.PI / 2

        bulletList.push( new Bullet(player.x, player.y, player.damage, angle) )
    }
}



function rnd (a, b) {
    
    return Math.floor((Math.random() * b) + a)
}



function windowResizeEvent() {

    C.height = window.innerHeight
    C.width = window.innerWidth
}