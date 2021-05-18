let doc = document;
let container = doc.querySelector('.container');
let formFilter = doc.forms.filter;
console.log(formFilter);
let div = doc.createElement('div');
div.className = 'res';
div.innerHTML = '';
container.appendChild(div);

let divList = doc.createElement('div');
divList.className = 'list-student';
divList.innerHTML = '';
container.appendChild(divList);
let list = doc.querySelector('.list-student');
let res = doc.querySelector('.res');
console.log(res);
list.innerHTML = 
`
<ul class="list">
	<h1>Список студентов групы WEB02</h1>			
</ul>
`;
let listStudents = doc.querySelector('.list');

let student = [
        { name: 'Valay', age: 20, city: 'Riga'},
        { name: 'Stas', age: 21, city: 'Poltava'},
        { name: 'Inga', age: 22, city: 'Kiev'},
        { name: 'Olya', age: 19, city: 'Poltava'},
        { name: 'Marina', age: 20, city: 'Sanjari'},
        { name: 'Dima', age: 19, city: 'Kiev'},
        { name: 'Nactay', age: 19, city: 'Poltava'},
        { name: 'Olya', age: 19, city: 'Poltava'},
        { name: 'Marina', age: 19, city: 'Poltava'},
        { name: 'Inga', age: 22, city: 'Poltava'},
];

//for(let i = 0; i < student.length; i++){
//        let user = student[i].name;
//console.log(student[i].name.indexOf('Inga'));
//console.log(user);     
//};

console.log(student);
console.log(student[0].name);
console.log(student[0].age);
console.log(student.length);

formFilter.innerHTML = 
`
<select name="name"></select>
<select name="age"></select>
<select name="city"></select>
`;
let formName = formFilter.name;
let formAge = formFilter.age;
let formCity = formFilter.city;
console.log(formName,formAge, formCity);


for(let i = 0; i < student.length; i++){
        console.log(student[i].name);
        

let studentsName = 
`
<option value="${student[i].name}">${student[i].name}</>
`;
formName.innerHTML += studentsName;
let studentsAge = 
`
<option value="${student[i].age}">${student[i].age}</>
`;
formAge.innerHTML += studentsAge;
let studentsCity = 
`
<option value="${student[i].city}">${student[i].city}</>
`;
formCity.innerHTML += studentsCity;
listStudents.innerHTML += 
`
<li class="list__item">Имя студента ${student[i].name} возраст ${student[i].age} город проживания ${student[i].city} </li>
`
};


console.log(filter);


formFilter[2].oninput = function(){
        let valueInput = this.value;
        console.log(valueInput);
        let findСhild = doc.getElementsByClassName('student');
        console.log(findСhild);
        while (findСhild[0]) {
                findСhild[0].parentNode.removeChild(findСhild[0]);
        }

        let filter = student.filter(function(item) {
                //console.log(item);
                
                if (item.city != valueInput) {
                        return true;
                };
                
                
                res.innerHTML += 
                `
                <p class="student">Имя студента ${item.name} возраст ${item.age} город проживания ${item.city} </p>
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
        let filter = student.filter(function(item) {
                //console.log(item);
                if (item.name != valueInput) {
                        return true;
                }
                res.innerHTML += 
                `
                <p class="student">Имя студента ${item.name} возраст ${item.age} город проживания ${item.city} </p>
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
        let filter = student.filter(function(item) {
                console.log(item);
                if (item.age != valueInput) {
                        return true;
                }
                res.innerHTML += 
                `
                <p class="student">Имя студента ${item.name} возраст ${item.age} город проживания ${item.city} </p>
                `;
        });
}
//пытаюсь сравнить названия городов между собой
let filterCity = student.filter(function(item){
        console.log(item);
        if (item.city != item.city) {
                return true;
        }
});
console.log(filterCity)
