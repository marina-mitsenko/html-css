let doc = document;
console.log('toggle.menu');
let menu = doc.querySelector('.menu');
let toggleMenu = doc.querySelector('.toggle-menu');
let close = doc.querySelector('.close');
let menuCount = 0;
let closeCount = 0;

let form = doc.querySelector('.form');
let call = doc.querySelector('.call');
let formCount = 0;
let callCount =0;

toggleMenu.onclick = function() {
    menuCount ++;
    console.log('menu', menuCount);
    if (menuCount > 1) {
        menuCount = 1; 
    }

    if (menuCount === 1) {
        menu.className = 'menu active';
        close.className = 'close active';
        toggleMenu.className = 'toggle-menu pasive';
       
    }
}
call.onclick = function() {
    formCount ++;
    console.log('form', formCount);
    if (formCount > 3) {
        formCount = 3;
    }
    if (formCount === 1) {
        form.className = 'form active';
    }
    if (formCount === 2) {
        form.className = 'form';
        call.className = 'call pasive';
        call.innerHTML = 'Вы заказали звонок!';
    }
    if (formCount === 3) {
        form.className = 'form';
    }
}
console.log('close', closeCount);
close.onclick = function() {
   closeCount ++;
   console.log('close', closeCount);
   if (closeCount > 1) {
       closeCount = 1;
   }
   if (closeCount === 1) {
        close.className = 'close';
        toggleMenu.className = 'toggle-menu';
        menu.className = 'menu'; 
   }
}
form.onclick = function() {
    form.className = 'form';
}
