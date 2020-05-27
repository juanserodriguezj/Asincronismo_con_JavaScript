/* Las promesas usan el objeto promise para ser 
ejecutadas, y su concepto es algo va a pasar, 
cuando ? pueder ser ahora, en un futuro o nunca*/

/* creo una constante donde voy a guardar una 
arrow function que va a retornar una promesa.
La promesa siempre tiene 2 argumentos. El primero
es si se ejecuta correctamente y el segundo es 
si se rechaza. hago una validacion con un if que
si sale verdadero va a resolver y si es falso
vamos a rechazar  y retornar las lineas de codigo
en el else de la validacion ejecutando el reject */
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("siii");
    } else {
      reject("ohh nooo");
    }
  });
};
/* Vamos a ejecutar la promesa, pero ahora tengo
encadenados dos elementos, el .then entonces
tengo una respuesta y hago algo con el.
En caso que la respuesta pase por el reject uso
de .cath para recibir un error.*/
somethingWillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
/* Ahora tenemos la estructura de como trabajamos
con las promesas */
/* Las promesas tienes el objetivo que a partir 
de la validacion algo va a pasar y va a ejecutar 
el resolve o el reject*/

/* Vamos a crear una segunda funcion donde guardamos
una arrowFunction y retornamos una nueva promesa, 
una vez adentro pasamos los parametros resolve, 
reject y tambien una nueva arrowFunction con la 
estructura de lo que vamos a utilizar. Esta vez es un
if donde si es verdadero el resultado le pasamos un 
settimeout que recibe una nueva funtion y el tiempo
que vamos a esperar para que se ejecute
 */
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Nooooo");
      reject(error);
    }
  });
};
/* una vez creada y estabecida y tenemos nuestra
promesa lista vamos a ejecutarle haciendo uso de 
los elementos .then para mostrar el response
y .catch para mostrar el error */
somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

/* Con las promesas tambien tenemos la posibilidad de
  correrlas al mismo tiempo o encadenadas usando 
  promise.all y crear un arreglo con los resultados */
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((error) => {
    console.error(error);
  });
