console.log(document);
console.dir(document);

let username = prompt('Как тебя зовут?');
let h1 = document.querySelector('.user-name');

let quest1 = ['Столица Украины?' , 'Киев'];
let p1 = document.querySelector('.question1');

let quest2 = ['Какого газа в атмосфере земли больше всего?' , 'Азота'];
let p2 = document.querySelector('.question2');


let quest3 = ['Какой римской цыфры не существует?' , '0'];
let p3 = document.querySelector('.question3');


let quest4 = ['Чего боятся люди страдающие алектрофобией?' , 'Кур'];
let p4 = document.querySelector('.question4');


let quest5 = ['2 + 4 ?' , '6'];
let p5 = document.querySelector('.question5');


let quest6 = ['2 * 8 ?' , '80'];
let p6 = document.querySelector('.question6');


let quest7 = ['3 + 7 ?', '10'];
let p7 = document.querySelector('.question7');


let res = 0;
let testsCount = 7;


h1.innerHTML = 'Привет' + ' ' + username + ' ' + 'давай посмотрим правильные ответы и твои результаты';

question(quest1);
question(quest2);
question(quest3);
question(quest4);
question(quest5);
question(quest6);
question(quest7);

alert('Вы ответили на ' + res + '/' + testsCount);


function question(testdata) {
    let userAn = prompt(testdata[0]); 
    if (userAn === testdata[1]) {
            res ++;
            alert('Верно');
    } else {
            alert('НЕВерно');
    }
}
p1.innerHTML = 'Вопрос был такой' + ' ' + quest1[0] + ' ' + 'Правильный ответ' + ' ' + quest1[1];
p2.innerHTML = 'Вопрос был такой' + ' ' + quest2[0] + ' ' + 'Правильный ответ' + ' ' + quest2[1];
p3.innerHTML = 'Вопрос был такой' + ' ' + quest3[0] + ' ' + 'Правильный ответ' + ' ' + quest3[1];
p4.innerHTML = 'Вопрос был такой' + ' ' + quest4[0] + ' ' + 'Правильный ответ' + ' ' + quest4[1];
p5.innerHTML = 'Вопрос был такой' + ' ' + quest5[0] + ' ' + 'Правильный ответ' + ' ' + quest5[1];
p6.innerHTML = 'Вопрос был такой' + ' ' + quest6[0] + ' ' + 'Правильный ответ' + ' ' + quest6[1];
p7.innerHTML = 'Вопрос был такой' + ' ' + quest7[0] + ' ' + 'Правильный ответ' + ' ' + quest7[1];
