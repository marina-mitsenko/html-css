console.log(document);
console.dir(document);
// focus() blur()
let doc = document;
let formMain = doc.forms.main;
let fieldName = formMain.name;
let fieldTelefon = formMain.telefon;
let fieldEmail = formMain.email;
let fieldData = formMain.data;
let fieldAge = formMain.age;
let fieldMenu = formMain.menu;
let fieldOffers = formMain.offers;
let btnSend = formMain.send;

let btn1 = formMain.btn1;
let chk1 = formMain.chk1;
let clickBtn1 = false;

let btn2 = formMain.btn2;
let chk2 = formMain.chk2;
let clickBtn2 = false;

let btn3 = formMain.btn3;
let chk3 = formMain.chk3;
let clickBtn3 = false;

let yes = formMain.yes;
let no = formMain.no;
let clickYes = false;
let clickNo = false;

yes.onclick = function(){
        console.log(clickYes);
        if(clickYes===false){
                yes.setAttribute('checked', '');
                clickYes = true;
                no.removeAttribute('checked');
        }else{
                yes.removeAttribute('checked');
                clickYes = false;
        }
}
        
no.onclick = function(){
        console.log(clickNo);
        if(clickNo===false){
                no.setAttribute('checked', '');
                clickNo = true;
                yes.removeAttribute('checked');
        } else {
                no.removeAttribute('checked');
                clickNo = false;
        }
        
}


btn1.onclick = function(){  
        console.log(clickBtn1);
        if(clickBtn1 === false){
                chk1.setAttribute('checked', '');
                clickBtn1 = true;
        } else {
                chk1.removeAttribute('checked');
                clickBtn1 = false;
        }
};
btn2.onclick = function(){  
        console.log(clickBtn2);
        if(clickBtn2 === false){
                chk2.setAttribute('checked', '');
                clickBtn2 = true;
        } else {
                chk2.removeAttribute('checked');
                clickBtn2 = false;
        }
};
btn3.onclick = function(){  
        console.log(clickBtn3);
        if(clickBtn3 === false){
                chk3.setAttribute('checked', '');
                clickBtn3 = true;
        } else {
                chk3.removeAttribute('checked');
                clickBtn3 = false;
        }
};

console.log(btnSend);
fieldName.onblur = function(){
        let value = this.value;
        console.log('елемент потерял фокус');
        if(value){
                console.log('Ok');
                fieldTelefon.removeAttribute('disabled');
        } else{
                console.log('Елемент не может быть пустым');
                this.focus();
                fieldTelefon.setAttribute('disabled', '');
                btnSend.setAttribute('disabled', '');
              //  fieldName.setPlaceholder('Елемент не может быть пустым', '');
        }
}
fieldTelefon.onblur = function(){
        let value = this.value;
        console.log('елемент потерял фокус');
        if(value){
                console.log('Ok');
                fieldEmail.removeAttribute('disabled');
        } else{
                console.log('Елемент не может быть пустым');
                this.focus();
                fieldEmail.setAttribute('disabled', '');
                btnSend.setAttribute('disabled', '');
        }
}
fieldEmail.onblur = function(){
        let value = this.value;
        console.log('елемент потерял фокус');
        if(value){
                console.log('Ok');
                fieldData.removeAttribute('disabled');
        } else{
                console.log('Елемент не может быть пустым');
                this.focus();
                fieldData.setAttribute('disabled', '');
                btnSend.setAttribute('disabled', '');
        }
}
fieldData.onblur = function(){
        let value = this.value;
        console.log('елемент потерял фокус');
        if(value){
                console.log('Ok');
                fieldAge.removeAttribute('disabled');
        } else{
                console.log('Елемент не может быть пустым');
                this.focus();
                fieldAge.setAttribute('disabled', '');
                btnSend.setAttribute('disabled', '');
        }
}
fieldAge.onblur = function(){
        let value = this.value;
        console.log('елемент потерял фокус');
        if(value){
                console.log('Ok');
                fieldMenu.removeAttribute('disabled');
        } else{
                console.log('Елемент не может быть пустым');
                this.focus();
                fieldMenu.setAttribute('disabled', '');
                btnSend.setAttribute('disabled', '');
        }
}
fieldMenu.onblur = function(){
        let value = this.value;
        console.log('елемент потерял фокус');
        if(value){
                console.log('Ok');
                fieldOffers.removeAttribute('disabled');
        } else{
                console.log('Елемент не может быть пустым');
                this.focus();
                fieldOffers.setAttribute('disabled', '');
                btnSend.setAttribute('disabled', '');
        }
}
fieldOffers.onblur = function(){
        let value = this.value;
        console.log('елемент потерял фокус');
        if(value){
                console.log('Ok');
                btnSend.removeAttribute('disabled');
        } else{
                console.log('Елемент не может быть пустым');
                this.focus();
                btnSend.setAttribute('disabled', '');
        }
}



formMain.onsubmit = function(e){
        e.preventDefault();
}

