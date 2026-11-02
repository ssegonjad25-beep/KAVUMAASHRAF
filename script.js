
const menuButton=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',nav.classList.contains('open'));});}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const year=document.querySelector('#year'); if(year) year.textContent=new Date().getFullYear();
const form=document.querySelector('#contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();document.querySelector('#formMessage').textContent='Thank you. This demo form is ready to connect to a business email or form service.';form.reset();});}
