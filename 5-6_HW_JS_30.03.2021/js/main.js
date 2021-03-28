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

let useran = prompt('Введите название рецепта который хотите увидеть');
console.log(useran);


createmenu(blok1, resipe1);
createmenu(blok2, resipe2);
createmenu(blok3, resipe3);
createmenu(blok4, resipe4);
createmenu(blok5, resipe5);


function createmenu (blok, resipe) {
       
        let List = '';

for (let i = 0; i < resipe.length; i++ ) {
        console.log(i);
        List += '<h2 class="list__item">' + resipe[i]  + '</h2>'
}

let ListHtml = '<div class="list">'  +
                    List  + 
                '</div>';

blok.innerHTML += ListHtml;

}