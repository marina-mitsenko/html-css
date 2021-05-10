let doc = document;

console.log(doc.body.children);
console.log(doc.body.firstElementChild);
console.log(doc.body.lastElementChild);

let container = doc.querySelector('.container');
console.log(container.previousElementSibling);
console.log(container.nextElementSibling);
console.log('---------------parent--------------');
console.log(container.parentElement);


let items = doc.querySelectorAll('.list__item');


for(let i = 0; i < items.length; i++){
       items[i].onclick = function(){
               let next = this.nextElementSibling;
               let prev = this.previousElementSibling;
                for(let i = 0; i < items.length; i++){
                        items[i].classList.remove('list__item-redbg', 'list__item-orangebg', 'translate', 'rotate');
                }
                this.classList.add('list__item-redbg');
                if(next !== null){
                        next.classList.add('list__item-orangebg');
                        setTimeout(function () {
                                next.classList.add('translate');  
                        }, 3000);
                }
                if(prev !== null){
                        prev.classList.add('list__item-orangebg');
                        setTimeout(function () {
                                prev.classList.add('rotate');      
                        }, 6000);
                }
       }
}