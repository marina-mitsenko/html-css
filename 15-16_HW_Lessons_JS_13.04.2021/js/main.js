console.log(document);
console.dir(document);
let doc = document;
let container = doc.querySelector('.container');
console.log(container);

let list = [
        {
          tittel: 'tittel1',
          content: 'Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.'
        },
        {
                tittel: 'tittel2',
                content: 'Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.'
        },
        {
                tittel: 'tittel3',
                content: 'Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.'
        },
        {
                tittel: 'tittel4',
                content: 'Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.'
        },
];
console.log(list);
console.log(list[1].content);
let ul = '<ul class="list">' + '</ul>';
container.innerHTML = ul;
let listItems = doc.querySelector('.list');

for (let i = 0; i < list.length; i++) {
        for (let key in list[i]) {
                console.log(key, ':', list[i][key]);
                       }
        console.log('...................');
        
        let ulList = 
        
        '<li class="list__item">' + 
        '<h2 class="tittel">' + list[i].tittel + '</h2>' + 
        '<p class="content">' + list[i].content + '</p>' + 
        '</li>';

listItems.innerHTML += ulList; 
}
let listItem = doc.querySelectorAll('.list__item');
console.log('список', listItem);
for(let i = 0; i<listItem.length; i++) {
        console.log(listItem[i]);
        listItem[i].onclick = function(){
                console.log(this);
                let content = this.querySelector('.content')
                content.classList.toggle('content__active');
        }
}
