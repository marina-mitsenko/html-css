console.log('HI!');
let doc = document;
let close = doc.querySelector('.menu__close');
let menu = doc.querySelector('.menu');
let toggle = doc.querySelector('.header__toggle-menu');
let write = doc.querySelector('.write');
let rapport = doc.querySelector('.rapport');
let formButton = doc.querySelector('.form__button');
console.log(write);
close.onclick = function(){
    
    menu.style.zIndex="-1";
}
toggle.onclick = function(){
    console.log('clik');
    menu.style.zIndex="1";
}
write.onclick = function(){
    rapport.style.display="block";
    
}
formButton.onclick = function(){
    // console.log('clik');
    rapport.style.display="none";
    write.innerHTML = `<a href="#" class="write__link">
    <p class="write__text">Я обов'язково звяжусь з Вами!</p>
    <i class="fas fa-at"></i>
    </a>`;
}
