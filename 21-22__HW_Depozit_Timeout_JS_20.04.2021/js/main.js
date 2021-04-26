let doc = document;

let boxItem1 = doc.querySelector('.box__item1');
let boxItem2 = doc.querySelector('.box__item2');
let boxItem3 = doc.querySelector('.box__item3');

let formDepozit = doc.forms.depozit;
let formEls = formDepozit.data.elements;
console.log(formEls);
console.log(formDepozit);

formEls[0].oninput = function() {
        let  valueInput = this.value;
        console.log(valueInput.length);
        if(valueInput.length > +10) {
               //valueInput.length < +10;
                console.log('значение слишком большое');
                this.style.background = 'red';
        } else{
                this.style.background = 'white';
        }
}
formEls[2].oninput = function() {
        let  valueInput = this.value;
        console.log(valueInput.length);
        if(valueInput.length > +2) {
               //valueInput.length < +10;
                console.log('значение слишком большое');
                this.style.background = 'red';
        } else{
                this.style.background = 'white';
        }
}


formDepozit.onsubmit = function(event) {
        event.preventDefault();
        //depozit(formDepozit);
        console.log('событие отправки формы');
        console.log('какой срок выбрал пользователь:', formDepozit.term.value);
        console.log('какой процент выбрал пользователь:', formDepozit.percent.value);
       
        for(let i = 0; i < formEls.length; i++ ){
                fieldIsEmpty(formEls[i]);
        }
}
function fieldIsEmpty(field) {
        let value = field.value;
        if (value) {
                console.log(value);
                field.style.border = '2px solid silver';
                depozit(formDepozit);
                
        } else {
                console.log('поле пустое:');
                field.style.border = '2px solid red';
                setTimeout(function(){
                        console.log('прошло 3 секунды')
                        field.style.border = '2px solid silver';
                        boxItem3.innerHTML = 
                        `
                        <div class="box__item3">
                        
                        </div>
                        `       
                }, 3000);
                boxItem3.innerHTML = 
                `
                <div class="box__item3">
                <p class="box__tittel" style="color: red;">Вам необходимо заполнить все поля формы!!!</p>
                </div>
                `
                boxItem1.innerHTML = 
                `
                <div class="">
               
                </div>
                `
                boxItem2.innerHTML = 
                `
                <div class="">
               
                </div>
                `
        }
}
function depozit(dataForm){
        
        let term = +dataForm.term.value;
        let percent = +dataForm.percent.value;
        let startdepozit = +dataForm.summa.value;
        let res = (startdepozit*(percent/100))/12*term+startdepozit;
        let height = (startdepozit/res*500);
        let gain = res-startdepozit;
        boxItem1.innerHTML = 
        `
        <p class="box__tittel">Первоначальная сумма депозита: ${startdepozit} грн.</p>
        <div class="diagramma-res" style="height: ${height}px;"></div>
        `

        boxItem2.innerHTML = 
        `
        <p class="box__tittel">Итоговая сумма депозита: ${res} грн.</p>
        <div class="diagramma" style="height: 500px; background: #c7600c;"></div>
        `
        boxItem3.innerHTML = 
        `
        <div class="box__item3">
        <p class="box__tittel">Ваш вклад увеличится на: ${gain} грн.</p>
        </div>
        `
}