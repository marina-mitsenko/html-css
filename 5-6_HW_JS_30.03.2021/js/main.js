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


ingredientList(resipe1, blok1);
ingredientList(resipe2, blok2);
ingredientList(resipe3, blok3);
ingredientList(resipe4, blok4);
ingredientList(resipe5, blok5);


    function ingredientList (resipe, blok) {
        let userAn = prompt('Введите название рецепта который хотите увидеть: Омлет, Бутерброд, Гамбургер, Чисбургер, Пюрешка');
        console.log(userAn);
        let h = prompt('Введите номер тега для блока: h1, h2, h3');
        console.log(h);
        //let incorrect = '<div>' + '<h2>такого блока не существует</h2>' + '</div>';
        
        let List = '';

        for (let i = 0; i < resipe.length; i++ ) {
                console.log(i);
                List += '<' + h + ' ' + 'class="list__item">' + resipe[i]  + '</' + h + '>'
        }

        if (userAn === 'Омлет') {
                let ListHtml = '<div class="list">'  +
                List  + 
            '</div>';

        blok.innerHTML += ListHtml;
        }
       
        if (userAn === 'Бутерброд') {
                let ListHtml = '<div class="list">'  +
                List  + 
            '</div>';

        blok.innerHTML += ListHtml;
        }
        if (userAn === 'Гамбургер') {
                let ListHtml = '<div class="list">'  +
                List  + 
            '</div>';

        blok.innerHTML += ListHtml;
        }
        if (userAn === 'Чисбургер') {
                let ListHtml = '<div class="list">'  +
                List  + 
            '</div>';

        blok.innerHTML += ListHtml;
        }
        if (userAn === 'Пюрешка') {
                let ListHtml = '<div class="list">'  +
                List  + 
            '</div>';

        blok.innerHTML += ListHtml;
        }
}
