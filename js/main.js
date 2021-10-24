let closer= document.querySelector('#closer');
let mobileMenu= document.querySelector('#mobileMenu');
let menubtn= document.querySelector('#menu-btn');

closer.onclick= () =>{
    console.log('closer clicked ');
    mobileMenu.classList.remove('open');
}

menubtn.onclick = () =>{
    console.log('closer clicked ');
    mobileMenu.classList.add('open');    
}