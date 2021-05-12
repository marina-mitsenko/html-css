let doc = document;
let str = 'My names is Marina. I live in Sanjari. I have a famyli.';

//console.log(str[1]);
//console.log(str.length);
//console.log(str.indexOf('a'));

//let str1 = str.replace('a', '*');
//console.log(str1);
//let str2 = str1.replace('a', '*');
//console.log(str2);
let myNewStr = newStr(str, 'a', '*');
console.log(myNewStr);


//for(let i = 0; i < str.length; i++){
//        console.log(str[i]);
//        console.log(i);
//}
function newStr (line, symbol, change) {
        let result = '';
        for(let char of str){
               // console.log(char);
                if (char !== symbol) {
                        result += char;
                } else {
                        result += change;
                }
        }
        return result;
}



console.log(subStrCount(str, 'a'));


function subStrCount(str, subStr) {
        let count = 0;
        let index = 0;
        console.log(subStr);
          
   while (index !== -1) {
            findIndex = str.indexOf(subStr, index);
            index = findIndex;
            if (index !== -1) {
                
                count ++;
                index ++;
            }
        }
    return count;
};

