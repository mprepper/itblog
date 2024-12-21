const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.menu_close-btn');
const menu1 = document.querySelector('.menu1');

menuBtn.addEventListener('click', ()=>{
    menu1.classList.add('menu1_open');
});

closeBtn.addEventListener('click', ()=>{
    menu1.classList.remove('menu1_open');
});