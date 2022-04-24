let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let home= document.getElementById('m-home');
let about= document.getElementById('m-about');
let services= document.getElementById('m-services');
let work= document.getElementById('m-work');
let blogs= document.getElementById('m-blogs');
let contact= document.getElementById('m-contact');

hamberger.addEventListener('click',function(){
  mobileNav.classList.add('open');
});
times.addEventListener('click',function(){
  mobileNav.classList.remove('open');
});

home.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

about.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
services.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
work.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
blogs.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
