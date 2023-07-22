const countdown = ()=>{
    const date = new Date('July 25, 2023 00:00:00').getTime()
    const now =new Date().getTime()
    
    const difference= date-now
    // console.log(difference)

    const seconds = 1000
    const minutes= seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    let timeDays = Math.floor(difference / days)
    let timeHours = Math.floor((difference % days)/ hours)
    let timeMinutes = Math.floor((difference % hours)/ minutes)
    let timeSeconds = Math.floor((difference%minutes) / seconds)
    
    timeHours = timeHours < 10 ? '0' + timeHours : timeHours
    timeDays = timeDays < 10 ? '0' + timeDays : timeDays
    timeMinutes = timeMinutes < 10 ? '0' + timeMinutes : timeMinutes
    timeSeconds= timeSeconds < 10 ? '0' + timeSeconds : timeSeconds


    document.getElementById('days').innerHTML=timeDays
    document.getElementById('hours').innerHTML=timeHours
    document.getElementById('minuts').innerHTML=timeMinutes
    document.getElementById('seconds').innerHTML=timeSeconds

}

countdown()
setInterval(countdown, 1000)

const next = document.querySelector('.next-btn');
const prev = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');

let index = 0;

function displayContent (index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
	});
	slides[index].style.display = 'flex';
}
displayContent(index);

function nextSlide () {
    if (index >= slides.length - 1) {
		index = 0;
	}else{
        index++;
    }
	displayContent(index);
}
function prevSlide () {
    if (index <= 0) {
        index = slides.length - 1;
	}else{
        index--;
    }
	displayContent(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

let imgContent = document.querySelectorAll('.info_page .img img');
let sectionText = document.querySelectorAll('.info_page .info .section_text')
let tabLink = document.querySelectorAll('.tab-link .tab')

tabLink.forEach((value, index) => {
    value.addEventListener('click', ()=>{
        tabContent(index)
    })
})

function tabContent (index) {
    imgContent.forEach((value) => {
       value.classList.remove('active')
	});
    sectionText.forEach((value) => {
       value.classList.remove('active')
	});
    tabLink.forEach((value) => {
        value.classList.remove('active')
    });
	imgContent[index].classList.add('active')
	sectionText[index].classList.add('active')
	tabLink[index].classList.add('active')
}
