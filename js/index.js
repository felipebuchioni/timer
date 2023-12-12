function getHourSeconds(seconds) {
    const data = new Date(seconds * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    })
}

const timer = document.querySelector('.timer')
const start = document.querySelector('.start-btn')
const pause = document.querySelector('.pause-btn')
const reset = document.querySelector('.reset-btn')

let seconds = 1
let timerCount;

function startTimer() {
    timer.classList.remove('paused')
    clearInterval(timerCount)
    timerCount = setInterval(function() {
        timer.innerText = getHourSeconds(seconds)
        seconds++
    }, 1000)
}

start.addEventListener('click', function() {
    if(!timer.classList.contains('paused') && timer.innerText !== "00:00:00") {
        alert('O timer já foi iniciado!')
    } else {
        startTimer()
    }
})

pause.addEventListener('click', () => {
    if(timer.classList.contains('paused') || timer.innerText === '00:00:00') {
        alert('O timer já está pausado!')
    } else {    
        clearInterval(timerCount)
        timer.classList.add('paused')
    }

})

reset.addEventListener('click', () => {
    if(timer.innerText === '00:00:00') {
        alert('O timer já está zerado!')
    }
    timer.classList.remove('paused')
    clearInterval(timerCount) 
    seconds = 1
    timer.innerText = '00:00:00'
})