console.log(document);
console.dir(document);

let userName = document.querySelector('.userName');
//console.log(userName);
//console.dir(userName);
//console.log(userName.placeholder);
//userName.placeholder = 'Это новый текст !!!';

let fistName = prompt('Привет, как тебя зовут?');
userName.placeholder = fistName;

//let fistName = prompt('Привет, как тебя зовут?');
//console.log(userName);
//userName.placeholder = userName;
let userLastName = document.querySelector('.userLastName');
let lastName = prompt('А фамилия у тебя какая?');
userLastName.placeholder = lastName;

let userPhone = document.querySelector('.userPhone');
let phone = prompt('Напиши свой телефон?');
userPhone.placeholder = phone;

let userAdress = document.querySelector('.userAdress');
let adress = prompt('Напиши название улицы и номер дома?');
userAdress.placeholder = adress;

let userNumber = document.querySelector('.userNumber');
let number = prompt('Какой индекс твоего города?');
userNumber.placeholder = number;

let userSiti = document.querySelector('.userSiti');
let siti = prompt('Напиши название города в котором ты живеш?');
userSiti.placeholder = siti;

let userEmail = document.querySelector('.userEmail');
let email = prompt('Укажи свой Email адрес');
userEmail.placeholder = email;

 
let tittel = document.querySelector('.tittel__data');
tittel.innerHTML = fistName + ' ' + lastName;
