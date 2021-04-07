console.log(document);
console.dir(document);

let doc = document;

let box = doc.querySelector('.box');
let btnShow = doc.querySelector('.show');
let btnHide = doc.querySelector('.hide');

let boxCount = 0;

btnShow.onclick = function() {
        boxCount ++;
        if (boxCount > 3) {
                boxCount = 0;
        }
        if (boxCount === 0) {
                box.className = 'box';
        }
        if (boxCount === 1) {
                box.className = 'box b1';
        }
        if (boxCount === 2) {
                box.className = 'box b2';
        }
        if (boxCount === 3) {
                box.className = 'box b3';
        }

}
btnHide.onclick = function() {
        boxCount ++;
        if (boxCount > 3) {
                boxCount = 0;
        }
        if (boxCount === 0) {
                box.className = 'box b3';
        }
        if (boxCount === 1) {
                box.className = 'box b2';
        }
        if (boxCount === 2) {
                box.className = 'box b1';
        }
        if (boxCount === 3) {
                box.className = 'box';
        }

}

console.log('.box');