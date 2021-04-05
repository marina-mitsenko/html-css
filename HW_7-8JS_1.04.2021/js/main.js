console.log(document);
console.dir(document);

let doc = document;
let box = doc.querySelector('.box');

let squareBase = [
    {
        strukture: {
                tag: 'div',
                class: 'square-item',
                id: 'square1'
        },
        styles: {
                height: '100px', 
                width: '100px', 
                background: 'green',
                margin: '20px',
                border: '5px solid olivedrab'
        }
    },
    {
        strukture: {
                tag: 'div',
                class: 'square-item',
                id: 'square1'
        },
        styles: {
                height: '200px', 
                width: '200px', 
                background: 'red',
                margin: '50px',
                border: '5px solid olivedrab'
        }
    },
    {
        strukture: {
                tag: 'h2',
                class: 'tittel-h2'
        },
        styles: {
                height: '50px', 
                width: '50px', 
                background: 'orange',
                margin: '20px'
        }
    },
    {
        strukture: {
                tag: 'p',
                class: 'box-radius'
        },
        styles: {
                height: '150px', 
                width: '150px', 
                background: 'grey',
                margin: '20px',
                borderRadius: '20em',
                border: '5px solid red'
        }
    }

];
//знаходимо кожен елемент обєкту
console.log(squareBase, squareBase.length);
console.log(squareBase[0].strukture.tag);
console.log(squareBase[0].strukture.class);
console.log(squareBase[0].strukture.id);
console.log(squareBase[0].styles.height);
console.log(squareBase[0].styles.width);
console.log(squareBase[0].styles.background);
console.log(squareBase[0].styles.margin);
console.log(squareBase[0].styles.border);
console.log(squareBase[0].strukture);
console.log(squareBase[0].styles);

// задаємо значення і для довжини обєкту і значення key для всіх ключів в обєкті і виводимо в консоль
for (let i = 0; i < squareBase.length; i++) {
        for (let key in squareBase[i]) {
                console.log(key, ':', squareBase[i][key])
                       }
        console.log('...................');
}

for (let i = 0; i < squareBase.length; i++) {
        let styles = '';
        for (let key in squareBase[i].styles) {
                if (key !== 'strukture')
                styles += `${key}:${squareBase[i].styles[key]};`;
                       }
         square =
               `
               <${squareBase[i].strukture.tag}
               class="${squareBase[i].strukture.class}"
               id="${squareBase[i].strukture.id}"
                 style="${styles}">
               </${squareBase[i].strukture.tag}>
               `
               box.innerHTML += square;
       
}