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

