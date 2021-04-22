let doc = document;

let boxItem1 = doc.querySelector('.box__item1');
let boxItem2 = doc.querySelector('.box__item2');
let boxItem3 = doc.querySelector('.box__item3');
let formDepozit = doc.forms.depozit;
console.log(formDepozit);

formDepozit.onsubmit = function(event) {
        event.preventDefault();
        depozit(formDepozit);
        console.log('событие отправки формы');
        console.log('какой срок выбрал пользователь:', formDepozit.term.value);
        console.log('какой процент выбрал пользователь:', formDepozit.percent.value);
}
function depozit(dataForm){
        
        let term = +dataForm.term.value;
        let percent = +dataForm.percent.value;
        let startdepozit = +dataForm.summa.value;
        let res = (startdepozit*(percent/100))/12*term+startdepozit;
        let height = res/startdepozit*300;
        let gain = res-startdepozit;
        boxItem1.innerHTML = 
        `
        <div>
        <p class="box__tittel">Первоначальная сумма депозита: ${startdepozit} грн.</p>
        
        <div class="diagramma-res" style="height: ${height}px;"></div>
        </div>
        `

        boxItem2.innerHTML = 
        `
        <div>
        <p class="box__tittel">Итоговая сумма депозита: ${res} грн.</p>
        
        <div class="diagramma"></div>
        </div>
        `
        boxItem3.innerHTML = 
        `
        <div class="box__item3">
        <p class="box__tittel">Ваш вклад увеличится на: ${gain} грн.</p>
        </div>
        `
}