console.log('HI!');
let doc = document;
let close = doc.querySelector('.menu__close');
let menu = doc.querySelector('.menu');
let toggle = doc.querySelector('.header__toggle-menu');
let write = doc.querySelector('.write');
let call = doc.querySelector('.call');
let formButton = doc.querySelector('.form__button');

//form
let formMain = doc.forms.main;
let fieldName = formMain.name;
let fieldEmail = formMain.email;
let fieldNumber = formMain.number;
let btnSendForm = formMain.send;
let FormClose = doc.querySelector('.form__close');
let communication = doc.querySelector('.communication');

// console.log(communication);
//закрытие формы
FormClose.onclick = function(){
    communication.style.display = "none";
    // console.log('clik');
}

fieldName.onblur = function(){
    let value = this.value;
    console.log('елемент потерял фокус');
    fieldName.placeholder = "Давайте познайомимося!";
    fieldName.classList.add('placeholderred');
    if(value){
            console.log('Ok');
            fieldEmail.removeAttribute('disabled');
    } 
}
fieldEmail.onblur = function(){
    let value = this.value;
    console.log('елемент потерял фокус');
    fieldEmail.placeholder = "Напишіть свій email!";
    fieldEmail.classList.add('placeholderred');
    if(value){
            console.log('Ok');
            fieldNumber.removeAttribute('disabled');
    } 
}
fieldNumber.onblur = function(){
    let value = this.value;
    console.log('елемент потерял фокус');
    fieldNumber.placeholder = "Напишіть свій телефон!";
    fieldNumber.classList.add('placeholderred');
    if(value){
            console.log('Ok');
            btnSendForm.removeAttribute('disabled');
    } 
}

// console.log(btnSendForm);
//чтоб кнопка для связи появилась через 10секунд
let showWrite = setTimeout(function() {
    write.style.display="block";
  }, 15000);

//чтоб кнопка для связи появилась через 5секунд
let showCall = setTimeout(function() {
    call.style.display="block";
  }, 7000);
close.onclick = function(){
    menu.style.zIndex="-1";
}
toggle.onclick = function(){
    console.log('clik');
    menu.style.zIndex="1";
}
write.onclick = function(){
    communication.style.display="block";
    write.style.display="none";
}
formButton.onclick = function(){
    // console.log('clik');
    communication.style.display="none";
    write.style.display="block";
    write.innerHTML = `<a href="#" class="write__link">
    <p class="write__text">Я обов'язково звяжусь з Вами!</p>
    <i class="fas fa-at"></i>
    </a>`;
    function delWrite() {
        write.style.display="none";
      }
      
      setTimeout(delWrite, 5000);
}
