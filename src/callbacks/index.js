/* ¿Que es un callback? 
Es una funcion que al crearla le pasamos como 
parametro una segunda funcion, y de esta forma al 
momento de hacer una peticion o un llamado asincrono
esta se ejecuta despues de este llamado. De esta forma
es como JavaScript ha implementado el asincronismo
en su lenguaje y con esta forma de crear codigo 
nosotros vamos a poderlo implementar y resolver 
algunos problemas*/

/* Lo que tenemos que hacer es una funcion y en esta 
funcion vamos a pasarle una segunda funcion que va
ejecutar un codigo particular */

/* Tengo mi funcion que se va encargar de sumar
dos numeros, y voy a generar un callback con los
parametros necesarios para hacer la suma */
function sum(num1, num2) {
  return num1 + num2;
}
/* De esta forma ya tenemos la primera funcion que se 
encarga de sumar dos numeros */

/* Ahora vamos a crear esa funcion que recibe como
argumento la funcion anterior */
function calc(num1, num2, callback) {
  /* Esta funcion va a calcular y recibe los numeros
  y un callback, normalmente por estandar nosotros le 
  ponemos este nombre y asi lo recomendamos*/
  return callback(num1, num2);
  /* Ahora yo puedo retornar lo que seria nuestro 
  callback, en este caso la funcion que le estoy
  pasando con los dos elementos que tengo que pasarle 
  para que funcione. */
}

console.log(calc(2, 2, sum));
/* Ahora creo el llamado para poder verlo en consola */

/* Como podemos ver creamos una funcion que recibe
como argumento otra funcion la cual se ejecuta cuando
se llama */
/* -------------------------------------------------------------------- */

/* Este ejemplo va a trabajar con tiempos, cuanto
como vamos a esperar a que algo suceda.

Que vamos hacer, nuevamente una primera funcion que
se va encargar del calculo que nosotros necesitamos
 */
function date(callback) {
  /* date solo ba a recibir el callback, vamos a
  pasarle el valor que es el estandar */
  console.log(new Date());
  /* Yo lo que voy a hacer es imprimir la fecha de
  este momento*/
  setTimeout(function () {
    /* Despues establesco un setTimeOut para esperar
    n tiempo para ejecutar un nuevo llamado y en este
    caso el llamado va a ser a nuestro callback */
    let date = new Date();
    /* creamos una variable tipo Date y va
     ser new date */
    callback(date);
    /* Ahora hago el llamado al callback y esto va a pasar 
    date */
  }, 3000);
  /* Tiempo en milisegundos para esperar el  */
}

/* Ahora vamos a crear la funcion que va imprimir 
estos valores */
function printDate(dateNow) {
  /* printDate recibe el parametro dateNow que es
  el valor que le estamos pasando */
  console.log(dateNow);
  /* impresion del parametro */
}

date(printDate);
/* Llamamos a date y le pasamos el callback que en 
este caso es printDate  */
