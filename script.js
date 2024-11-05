const burgerButton=document.querySelector('.burger-menu');
const menu= document.querySelector('ul');

burgerButton.addEventListener('click', function (){
    menu.classList.toggle('show-menu');
});
