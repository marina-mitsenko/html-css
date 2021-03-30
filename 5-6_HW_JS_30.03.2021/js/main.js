console.log(document);
console.dir(document);

let doc = document;
let resipe1 = ['Молоко','Яйца'];
let resipe2 = ['Хлеб','Колбаса', 'Кетчуп'];
let resipe3 = ['Булка','Котлета', 'Огурец'];
let resipe4 = ['Булка','Котлета', 'Сыр', 'Огурец'];
let resipe5 = ['Картошка'];


console.log (resipe1, typeof resipe1);
console.log (resipe2, typeof resipe2);
console.log (resipe3, typeof resipe3);
console.log (resipe4, typeof resipe4);
console.log (resipe5, typeof resipe5);


let blok1 = doc.querySelector('.blok1');
let blok2 = doc.querySelector('.blok2');
let blok3 = doc.querySelector('.blok3');
let blok4 = doc.querySelector('.blok4');
let blok5 = doc.querySelector('.blok5');

let data = ['Омлет', 'Бутерброд', 'Гамбургер', 'Чисбургер', 'Пюрешка'];
console.log(data, typeof data);

confirm('Названия блоков будут такие: Омлет, Бутерброд, Гамбургер, Чисбургер, Пюрешка');
confirm('И срабатывает вставка блока только если написать их в таком порядке');

ingredientList(resipe1, data, blok1);
ingredientList(resipe2, data, blok2);
ingredientList(resipe3, data, blok3);
ingredientList(resipe4, data, blok4);
ingredientList(resipe5, data, blok5);


    function ingredientList (resipe, nameList, blok) {
        let userAn = prompt('Введите название рецепта который хотите увидеть');
        console.log(userAn);
        //let incorrect = '<div>' + '<h2>такого блока не существует</h2>' + '</div>';
        
        let List = '';

        for (let i = 0; i < resipe.length; i++ ) {
                console.log(i);
                List += '<h2 class="list__item">' + resipe[i]  + '</h2>'
        }

        if (userAn === nameList[0]) {
                let ListHtml = '<div class="list">'  +
                List  + 
            '</div>';

        blok.innerHTML = ListHtml;
        }
       
        if (userAn === nameList[1]) {
                let ListHtml = '<div class="list">'  +
                List  + 
            '</div>';

        blok.innerHTML = ListHtml;
        }
        if (userAn === nameList[2]) {
                let ListHtml = '<div class="list">'  +
                List  + 
            '</div>';

        blok.innerHTML = ListHtml;
        }
        if (userAn === nameList[3]) {
                let ListHtml = '<div class="list">'  +
                List  + 
            '</div>';

        blok.innerHTML = ListHtml;
        }
        if (userAn === nameList[4]) {
                let ListHtml = '<div class="list">'  +
                List  + 
            '</div>';

        blok.innerHTML = ListHtml;
        }
}
