/* Vamos a consumir una api, hacer una peticion para
obtener los elementos que nos trae la api y despues
traer al primer personaje, dentro del primer personaje
consultar la dimension a la que pertenece. Este ejercicio
es sobre la api de rick and morty */

/* Ejecutando una consulta en el navegador sobre la
API hay mucha data y es dificil de manipular. Para 
solucionar estas "fallas" vamos a implementar una
herramienta llamada postman que nos va a servir para
poder analizar este llamado. 
Con postman instalado, vamos a pegar la url
https://rickandmortyapi.com/api/character/ y hacemos
el llamado a la API, lo que vamos a obtener es la 
informacion de varias formas, una de ellas estructurada.
Hay valores que necesitamos obtener que no podremos 
tener en el primer llamado sino en una segunda peticion
y eso es lo que haremos en nuestros callbacks. 
*/

/* Nuestra implementacion va a trabajar sobre node,
y como estamos trabajando con node.js vamos a necesitar
instalar una dependencia llamada xmlhttprequest.
Esta dependecia es un objeto que esta dentro de 
javascript el cual nos va a permitir hacer peticiones
hacia algun servicio en la nube. */

/* xmlhttprequest tiene la funcionalidad de trabajar
ftp o con archivos, esta vez solo vamos a trabajar
con peticiones a la API */

/* Una vez instalada vamos a instanciarla en una
variable esto va ser igual al require al final utilizo 
la propiedad para hacer instancias a una api desde JS. 
 */
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/* Vamos a contruirla usando XMLHttpRequest por que
fetch es una implementacion muy avanzada para el ejercicio
que estamos haciendo por el uso de promesas. */

/* Creamos una funcion fetchdata que permite traer
informacion desde nuestra api a la cual le pasamos
un callback y despues podremos desencadenar los 
llamados que necesitamos */
function fetchData(url_api, callback) {
  //se instancia el objeto a una variable
  let xhttp = new XMLHttpRequest();
  /* Ahora vamos a utilizar el primer referente
  al elemento XMLHttpRequest y es abrir una url
  ó hacer el llamado a una url. 
  xhttp.open nos permite hacer ese llamado y
  recibe cual es la peticion Get, a quien le hacemos 
  esa peticion y al final un tercer valor para que
  se maneje de forma asincrona con el valor true,
  estamos activando el asincronismo*/
  xhttp.open("GET", url_api, true);
  /* YA que tenemos esa apertura tengo que escuchar
  lo que nos va a hacer esa conexion, con 
  xhttp.onreadystatechange escucho el cambio que 
  sucede y si lo hace ejecuto una funcion que recibe
  un evento*/
  xhttp.onreadystatechange = function (event) {
    /* Aca podemos hacer una validacion de si el estado
    es satisfactorio, existen hasta 5 diferentes estados
    0 = inicializado, 1 = esta cargando, 
    2 = ya se ha cargado, 3 = si hay una descarga
    4 = se ha completado. En este ejemplo voy a 
    ha usar readyState para ver el estado en el que se
    encuentra y lo triple-igualo a un valor numerico
    4 para saber si ha sido completado*/
    if (xhttp.readyState === 4) {
      /*  Ejecuto una siguiente llamada que me
      permite saber el status en el que se encuentra, 
      si bien se ha completado la peticion no sabemos
      si es correcta no sabemos si nos arrojo un 200
      que todo esta bien o un 500 por que algo fallo
      o un 400 que no encontro algo. Nosotros debemos
      garantizar que el estatus es un 200 que la peticion
      ha sido completada correctamente */
      if (xhttp.status === 200) {
        /* Ya que tenemos el estado que necesitamos 
        ahora puedo regresar el callback. Normalmente
        callback utiliza un estandar dentro de node
        que permite decir que el primer valor que le
        vamos a pasar es el error y el segundo es la
        informacion que se desencadena. 
        
        El primer valor no es un error sino que quiero 
        mandar en el segundo el resultado pero al ser un 
        JSON yo lo tengo que parsear por que yo recibo 
        una respuesta en texto unsando responseText 
        que es como yo estoy obteniendo este llamado, 
        si yo no lo paso de esta forma yo voy a mandar
        solo un string de texto que es un objeto y no 
        puedo iterar*/
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        /* Como buena practica en el else voy a mandar
        un error en caso que no este sucediendo
        correctamente */
        const error = new Error("Error" + url_api);

        /* Voy a retornar el callback y como hablamos
        el standar es mandar primero el error y al final
        null por que no estoy mandando el resultado 
        de algo que se desencadena*/
        return callback(error, null);
      }
    }
  };
  /* Al final hago el xhttp donde se va a mandar 
  la solicitud */
  xhttp.send();
}
/* DE esta forma ya tengo lista la funcion que le 
va darle vida a las llamadas de a la API */
/* ------------------------------------------------------------------------------------------------ */

/* Ya tenemos la funcion encargada de hacer peticiones
a la API, vamos a resolver nuestro problema que es
hacer una peticon a la api, obtener cuantos personajes
tienes despues acceder al primer personja y obtener
la ubicacion en la que se encuentra para saber luego
la dimensión. Con esto claro vamos a realizar tres llamados
a nuestra API utilizando callbacks  */

/* En la parte superior del documento voy a declarar
una variable API en donde voy a guardar la url del llamado
a la api */

/* Hago el llamado a fetchdata que recibe por 
parametro API y despues una funcion en este caso es
el callback que tambien recibe por parametro 
2 elementos el error y la onformacion o los datos 
resultantes y los llamamos error1, data1. 
¿Por que el 1 en los parametros ? 
por que voy a utilizar esta funcion varias veces de
forma anidada para hacer las tres peticiones que
necesito*/
fetchData(API, function (error1, data1) {
  /* hago una validacion por que tengo que manejar 
  errores, si este existe o llega retorne algo, 
  al llegar al return la funcion se acaba */
  if (error1) return console.error(error1);
  /* En dado caso que la peticion funcione 
  utilizo a fetchData nuevamente y por parametro le
  paso API NUEVAMENTE y el resultado en este caso 
  data1 y despues de analizar la api en postman 
  sabemos que la informacion que necesitamos
  esta en results voy a este arreglo adentro 
  del arreglo que estamos obteniendo y nos ubicamos
  en la primera posicion que es la que necesitamos
  y obtengo su id. Continuando con la estructura 
  creo la nueva function que recibe estos dos valores
  error2 y data 2 */
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);

    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);

      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
