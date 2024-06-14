//Comentarios iguais a C
/**/

//global
var myName = "Gabriel"

myName = 8;
//local 
let ourName = "freeCode freeCode";
//constantes
/*const pi = 3.14;
var a = a+1;
console.log(a);
var b = 2;
a = b;
console.log(a);
console.log(ourName);
ourName = ourName.replace(/free/g,"pay");
var c = "I am a";
console.log(ourName);
console.log(c+"\b String");
var alfa = "abcdefghijk"

console.log(alfa[alfa.length-(alfa.length-4)-1])
var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var array = [1,2];
console.log(array);
array.push(3);
console.log(array);
array.pop();
console.log(array);
array.shift()
console.log(array);
array.unshift("Jusas")
console.log(array);
var myData = myArray[3][0][1];
console.log(myArray);
console.log(myData);
var mglobal = 2;
function teste(){
    var global = 3;
    console.log(mglobal);
    console.log(global);
}
console.log(mglobal);
teste();
*/

var pessoa = {
    "name":"Pedro",
    "age":15,
    "the drink":"water"
}

console.log(pessoa.age);
console.log(pessoa["the drink"]);
pessoa.altura= 1.82;
delete pessoa.age;

function numero(val){
    var numeros={
        1:"um",
        2:"dois",
        3:"tres",
        4:"quatro"
    };
    return numeros[val];
}

console.log(numero(3));
