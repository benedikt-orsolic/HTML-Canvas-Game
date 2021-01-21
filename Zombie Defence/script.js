let frameTime = 100     //Time in ms each frame is shown ( 1 / frames per second )



window.addEventListener('resize', windowResizeEvent)



let C = document.getElementById('canvas') // Canvas reference
let ctx = canvas.getContext('2d')         // Context reference

let intervalAnimate = undefined



class Zombie {

    consturctor(x, y, damage, health) {
        this.posX = x
        this.posY = y

        this.damage = damage
        this.maxHealth = health 
        this.health = health
    }
}

class bullet {

    consturctor () {
        
        this.damage = damage 
        this.speedX = speedX
        this.speedY = speedY 

        this.x = x 
        this.y = y 
    }

    move () {
        
    }
}



let offset = { x:0, y:0 }
let zombieList = []
let bulletList = []







function animate(){
    
    ctx.clearRect(0, 0, C.width, C.height)

}



function rnd (a, b) {
    
    return Math.floor((Math.random() * b) + a)
}



function windowResizeEvent() {

    C.height = window.innerHeight
    C.width = window.innerWidth
}