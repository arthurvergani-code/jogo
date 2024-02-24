const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clauds = document.querySelector('.clauds')
const gameboard = document.querySelector('game-board')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

    mario.classList.remove('jump');

    }, 500)

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const claudsPosition = clauds.offsetLeft

    if (pipePosition <= 111 && pipePosition > 0 && marioPosition < 85)
    {

        pipe.style.animation = 'none' 
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none' 
        mario.style.bottom = `${marioPosition}px` 

        mario.src = './img/game-over.png'

        

        clearInterval(loop)
        
    }

}, 10)

document.addEventListener('click', jump);
document.addEventListener('keydown', jump);