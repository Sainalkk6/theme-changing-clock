const hourEl = document.querySelector('.hour') 
const minueEl = document.querySelector('.minute') 
const secondEl = document.querySelector('.second') 
const timeEl = document.querySelector('.time') 
const dateEl = document.querySelector('.date') 
const toggle = document.querySelector('.toggle') 


const days = ['Sunday','Moday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']




toggle.addEventListener('click',function(e){
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Darks Mode'

        
    } else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

function setTime(){
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >=12 ? 'PM' : 'AM'


    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursClock,0,11,0,360)}deg)`
    minueEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,59,0,360)}deg)`

    timeEl.innerHTML= `${hoursClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



setTime()

setInterval(setTime,1000)