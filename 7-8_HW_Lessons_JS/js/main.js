console.log(document);
console.dir(document);

let doc = document;
let box = doc.querySelector('.box');
let squareBase = [
    ['div', '100px', '100px', 'green', '20px', '5px solid olivedrab'],
    ['p', '150px', '150px', 'yellow','20px', '5px solid olivedrab'],
    ['h2', '50px', '50px', 'orange','20px', '5px solid olivedrab'],
    ['h3', '200px', '200px', 'blue','20px', '5px solid olivedrab'],
    ['div', '100px', '100px', 'green','20px', '5px solid olivedrab'],
];
console.log(squareBase);

for (let i = 0; i < squareBase.length; i++) {

  square =
'<' + squareBase[i][0] + ' ' + 
'class="square-item"' +
  'style="' +
  'height:' + squareBase[i][1] + ' '+ ';' +
  'width:' + squareBase[i][2] + ' '+ ';' +
  'background:' + squareBase[i][3] + ' '+ ';' +
  'margin:' + squareBase[i][4] + ' '+ ';' +
  'border:' + squareBase[i][5] + ' '+ ';' +
  '"' + 
  '>' + 
'</' + squareBase[i][0] + '>';

box.innerHTML += square;
}

