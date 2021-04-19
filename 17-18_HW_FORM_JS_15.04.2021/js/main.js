let doc = document;
let btnSubmit = doc.querySelector('.submit');
let boxItem1 = doc.querySelector('.box__item1');
let boxItem2 = doc.querySelector('.box__item2');
let boxItem3 = doc.querySelector('.box__item3');
let boxItem4 = doc.querySelector('.box__item4');
let boxItem5 = doc.querySelector('.box__item5');
let boxItem6 = doc.querySelector('.box__item6');

console.log(boxItem1, boxItem2, boxItem3, boxItem4, boxItem5);

let formhtmlELements = doc.forms.htmlELements;
console.log(formhtmlELements);


formhtmlELements.onsubmit = function(event) {
        event.preventDefault();
        
        console.log('событие отправки формы');
        console.log('какой box__item выбрал пользователь:', formhtmlELements.parent.value);
        console.log('какой тег выбрал пользователь:', formhtmlELements.teg.value);
        console.log('какой клас задал пользователь:', formhtmlELements.class.value);
        console.log('Какой текс написал пользователь:', formhtmlELements.text.value)
   

        if(formhtmlELements.parent.value === 'box__item1') {
                boxItem1.innerHTML = `<${formhtmlELements.teg.value} class="${formhtmlELements.class.value}">${formhtmlELements.text.value}</${formhtmlELements.teg.value}>`
        };
        if(formhtmlELements.parent.value === 'box__item2') {
                boxItem2.innerHTML = `<${formhtmlELements.teg.value} class="${formhtmlELements.class.value}">${formhtmlELements.text.value}</${formhtmlELements.teg.value}>`
        };
        if(formhtmlELements.parent.value === 'box__item3') {
                boxItem3.innerHTML = `<${formhtmlELements.teg.value} class="${formhtmlELements.class.value}">${formhtmlELements.text.value}</${formhtmlELements.teg.value}>`
        };
        if(formhtmlELements.parent.value === 'box__item4') {
                boxItem4.innerHTML = `<${formhtmlELements.teg.value} class="${formhtmlELements.class.value}">${formhtmlELements.text.value}</${formhtmlELements.teg.value}>`
        };
        if(formhtmlELements.parent.value === 'box__item5') {
                boxItem5.innerHTML = `<${formhtmlELements.teg.value} class="${formhtmlELements.class.value}">${formhtmlELements.text.value}</${formhtmlELements.teg.value}>`
        };
        if(formhtmlELements.parent.value === 'box__item6') {
                boxItem6.innerHTML = `<${formhtmlELements.teg.value} class="${formhtmlELements.class.value}">${formhtmlELements.text.value}</${formhtmlELements.teg.value}>`
        };

        
}