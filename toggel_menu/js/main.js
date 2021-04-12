let doc = document;
console.log('toggle.menu');
let menu = doc.querySelector('.menu');
let toggleMenu = doc.querySelector('.toggle-menu');
let close = doc.querySelector('.close');
let menuCount = 0;

let form = doc.querySelector('.form');
let call = doc.querySelector('.call');
let formCount = 0;
let callCount =0;

toggleMenu.onclick = function() {
    menuCount ++;
    console.log(menuCount);
    if (menuCount > 2) {
        menuCount = 1; 
    }

    if (menuCount === 1) {
        menu.className = 'menu active';
       
    }
    if (menuCount === 2) {
        menu.className = 'menu'; 
    }
}
call.onclick = function() {
    formCount ++;
    console.log(formCount);
    if (formCount > 2) {
        formCount = 1;
    }
    if (formCount === 1) {
        form.className = 'form active';
    }
    if (formCount === 2) {
        form.className = 'form';
        call.className = 'call pasive';
        call.innerHTML = 'Вы заказали звонок!';
    }
}
