kamaDatepicker('date1')
kamaDatepicker('date2')
kamaDatepicker('date3')
kamaDatepicker('date4')
kamaDatepicker('date5')  


let card = document.querySelectorAll('.card')
let inputs = document.querySelectorAll('.inputs')
let current = 0
function showTravel(n){
  current = n
  for (let i = 0; i < 4 ; i++) {
    card[i].classList.remove('active')
    inputs[i].classList.add('hidden')
  }
  card[current].classList.add('active')
  inputs[current].classList.remove('hidden')
}
showTravel(0)


const barBtn = document.querySelector('#bar')
const nav = document.querySelector('#navbar')
$('#bar').click(function(){
})
$('#navbar').css({
  'background-color':'red'
})


const yekTarafe = document.getElementById('raft')
const ratebargasht = document.getElementById('raftbargasht')
const inputBargasht = document.getElementById('data5')
$('.raft-not').click(function(){
  $('#date5').css({
    'display':'none'
  })
})
$('.raft-bargasht').click(function(){
  $('#date5').css({
    'display':'block'
  })
})


// const loading = document.getElementById('loading')
// setInterval(() => {
//   loading.style.opacity = '0'  
// }, 3000);
// setInterval(() => {
//   loading.style.display = 'none'  
// }, 3200);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView:1,
      spaceBetween:10,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

});

