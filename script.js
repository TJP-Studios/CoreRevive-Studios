const hamburger = document.querySelector('.hamburger')
const nav2 = document.querySelector('.nav2')
const close = document.querySelector('.closemenu')

hamburger.addEventListener('click', ()=> {
    nav2.classList.toggle('visible');
    close.classList.remove('hide');
    hamburger.classList.add('hide')
})

close.addEventListener ('click', ()=> {
   close.classList.add('hide');
   hamburger.classList.remove('hide');
   nav2.classList.toggle('visible');
})