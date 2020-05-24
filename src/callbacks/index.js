/* ¿Que es un callback? 
Es una funcion que al crearla le pasamos como 
parametro una segunda funcion, y de esta forma al 
momento de hacer una peticion o un llamado asincrono
esta se ejecuta despues de este llamado. De esta forma
es como JavaScript ha implementado el asincronismo
en su lenguaje y con esta forma de crear codigo 
nosotros vamos a poderlo implementar y resolver 
algunos problemas*/
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));

/* ---------------------------------- */

function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}
date(printDate);
