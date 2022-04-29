let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let home= document.getElementById('m-home');
let about= document.getElementById('m-about');
let skills= document.getElementById('m-skills');
let cert= document.getElementById('m-cert');
let services= document.getElementById('m-services');
let project= document.getElementById('m-project');
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
skills.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
cert.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
services.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
project.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
contact.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
