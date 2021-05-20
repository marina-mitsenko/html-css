let doc = document;
console.log('hi');
let formFilter = doc.forms.filter;
let div = doc.createElement('div');
div.className = 'students';
div.innerHTML = '';
let container = doc.querySelector('.container');
container.appendChild(div);
let res = doc.querySelector('.students');
console.log(res)
let users = [
        { foto: 'foto10', name: 'Dima', age: 20, city: 'Riga'},
        { foto: 'foto11', name: 'Vasya', age: 21, city: 'Poltava'},
        { foto: 'foto12', name: 'Dima', age: 22, city: 'Kiev'},
        { foto: 'foto13', name: 'Vasya', age: 19, city: 'Poltava'},
        { foto: 'foto14', name: 'Dima', age: 20, city: 'Sanjari'},
        { foto: 'foto15', name: 'Kolya', age: 19, city: 'Kiev'},
        { foto: 'foto16', name: 'Sasha', age: 22, city: 'Kiev'},
        { foto: 'foto17', name: 'Sasha', age: 19, city: 'Poltava'},
        { foto: 'foto18', name: 'Kolya', age: 22, city: 'Kiev'},
        { foto: 'foto19', name: 'Kolya', age: 20, city: 'Kiev'},
        { foto: 'foto1', name: 'Tany', age: 20, city: 'Kiev'},
        { foto: 'foto2', name: 'Nastay', age: 19, city: 'Poltava'},
        { foto: 'foto3', name: 'Olya', age: 22, city: 'Riga'},
        { foto: 'foto4', name: 'Nina', age: 19, city: 'Kiev'},
        { foto: 'foto5', name: 'Ira', age: 20, city: 'Poltava'},
        { foto: 'foto6', name: 'Tany', age: 22, city: 'Kiev'},
        { foto: 'foto7', name: 'Ira', age: 20, city: 'Riga'},
        { foto: 'foto8', name: 'Nina', age: 22, city: 'Poltava'},
        { foto: 'foto9', name: 'Ira', age: 22, city: 'Sanjari'},     
];
createFilter(users, 'name', 'selectNames', formFilter);
createFilter(users, 'age', 'selectAge', formFilter);
createFilter(users, 'city', 'selectSity', formFilter);




function createFilter(arr, key, selectName, form){
        let items = getUniq(key, arr);
        let selectItems = createSelect(items, selectName);
        form.insertAdjacentHTML('beforeend', selectItems);
}

function createSelect(optionsArr, selectName){
        let optionsItems = '';
        optionsArr.forEach(function(item){
                optionsItems += `<option value="${item}">${item}</option>`
        })
        let select =
        `
        <select name="${selectName}" id="">
                ${optionsItems}
        </select>
        `;
        return select;
}


function getUniq(key, sourceArr){
        let arr = [];
        sourceArr.forEach(function(item) {
                if (arr.indexOf(item[key]) === -1){
                        arr.push(item[key]);
                }
        });
        return arr
}
formFilter[2].oninput = function(){
        let valueInput = this.value;
        console.log(valueInput);
        let findСhild = doc.getElementsByClassName('student');
        console.log(findСhild);
        while (findСhild[0]) {
                findСhild[0].parentNode.removeChild(findСhild[0]);
        }
        let filter = users.filter(function(item) {
                //console.log(item);
                if (item.city != valueInput) {
                        return true;
                };
                res.innerHTML += 
                `
                <div class="student">
				<div class="student__foto"><img src="img/${item.foto}.jpg" alt="#"></div>
				<div class="student__name">${item.name}</div>
				<div class="student__age">${item.age}</div>
				<div class="student__sity">${item.city}</div>
		</div>
                `;
        });
}
formFilter[1].oninput = function(){
        let valueInput = this.value;
        console.log(valueInput);
        let findСhild = doc.getElementsByClassName('student');
        console.log(findСhild);
        while (findСhild[0]) {
                findСhild[0].parentNode.removeChild(findСhild[0]);
        }
        let filter = users.filter(function(item) {
                //console.log(item);
                if (item.age != valueInput) {
                        return true;
                };
                res.innerHTML += 
                `
                <div class="student">
				<div class="student__foto"><img src="img/${item.foto}.jpg" alt="#"></div>
				<div class="student__name">${item.name}</div>
				<div class="student__age">${item.age}</div>
				<div class="student__sity">${item.city}</div>
		</div>
                `;
        });
}
formFilter[0].oninput = function(){
        let valueInput = this.value;
        console.log(valueInput);
        let findСhild = doc.getElementsByClassName('student');
        console.log(findСhild);
        while (findСhild[0]) {
                findСhild[0].parentNode.removeChild(findСhild[0]);
        }
        let filter = users.filter(function(item) {
                //console.log(item);
                if (item.name != valueInput) {
                        return true;
                };
                res.innerHTML += 
                `
                <div class="student">
				<div class="student__foto"><img src="img/${item.foto}.jpg" alt="#"></div>
				<div class="student__name">${item.name}</div>
				<div class="student__age">${item.age}</div>
				<div class="student__sity">${item.city}</div>
		</div>
                `;
        });
}