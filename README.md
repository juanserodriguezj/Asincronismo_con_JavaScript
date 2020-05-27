# Asincronismo_con_JavaScript

Aprenderemos a trabajar las principales estructuras que maneja este lenguaje para trabajar con él a sincronismo, Callbacks, Promesas y Async/Await. Aplicarlas para extraer información de una API

El asincronismo es básicamente una manera de aprovechar el tiempo y los recursos de nuestra aplicación, ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la información de una API), para posteriormente continuar con las tareas que requerían esa información que no tenías de manera instantánea.
Un ejemplo fácil es comparando asincronismo vs sincronismo: En lenguajes síncronos al hacer un temporizador para ejecutar una función, todo el código se pausa hasta terminar el tiempo, mientras que en Javascript u otros lenguajes asíncronos, podemos estar aprovechando ese tiempo para ejecutar otros procesos hasta que ese tiempo finaliza.

Event Loop
• El Event Loop hace que Javascript parezca ser multihilo a pesar de que corre en un solo proceso.
• Javascript se organiza usando las siguientes estructuras de datos:
• Stack. Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en qué punto de ejecución nos encontramos.
• Memory Heap. De forma desorganizada se guarda información de las variables y del scope.
• Schedule Tasks. Aquí se agregan a la cola, las tareas programadas para su ejecución.
• Task Queue. Aquí se agregan las tares que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
• MicroTask Queue. Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.
• El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.

API
Interfaz de programación de aplicaciones (Application Programming Interface). Es un conjunto de
rutinas que provee acceso a funciones de un determinado software.
Concurrencia
Cuando dos o más tareas progresan simultáneamente.
Paralelismo
Cuando dos o más tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.
Bloqueante
Una llamada u operación bloqueante no devuelve el control a nuestra aplicación hasta que se ha
completado. Por tanto el thread queda bloqueado en estado de espera.
Síncrono
Es frecuente emplear ‘bloqueante’ y ‘síncrono’ como sinónimos, dando a entender que toda la
operación de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que
se complete para procesar el resultado.
Asíncrono
La finalización de la operación I/O se señaliza más tarde, mediante un mecanismo específico
como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta
sea procesada en diferido.
Call Stack
La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en
que punto del programa estamos, por donde vamos.
Heap
Región de memoria libre, normalmente de gran tamaño, dedicada al alojamiento dinámico de
objetos. Es compartida por todo el programa y controlada por un recolector de basura que se
encarga de liberar aquello que no se necesita.
Cola o Queue
Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al
de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra su
callback correspondiente.
Eventloop o Loop de eventos
Cuando la pila de llamadas (call stack) se vacía, es decir, no hay nada más que ejecutar, se
procesan los mensajes de la cola. Con cada ‘tick’ del bucle de eventos, se procesa un nuevo
mensaje.
Hoisting
Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del
código en tiempo de compilación.
DOM
DOM permite acceder y manipular las páginas XHTML como si fueran documentos XML. De
hecho, DOM se diseñó originalmente para manipular de forma sencilla los documentos XML.
XML
Lenguaje de marcado creado para la transferencia de información, legible tanto para seres
humanos como para aplicaciones informáticas, y basado en una sencillez extrema y una rígida
sintaxis. Así como el HTML estaba basado y era un subconjunto de SGML, la reformulación del
primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de
XML.
Events
Comportamientos del usuario que interactúa con una página que pueden detectarse para lanzar
una acción, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una
opción de un desplegable (onselect), que pase el ratón sobre un objeto (onmouseover), etc.
Compilar
Compilar es generar código ejecutable por una máquina, que puede ser física o abstracta como
la máquina virtual de Java.
Transpilar
Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un
programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el
original.

Hablemos de un punto importante que debes de tener en cuenta a la hora de elegir cuál será la implementación que utilizarás en tus proyectos para manejar de forma correcta el asincronismo en JavaScript.
Teniendo en cuenta lo aprendido en este curso quiero mostrarte las ventajas y desventajas que tienen cada una de las formas en las que podemos manejar asincronismo.
Callbacks Ventajas
Simpleza
Nos permite disponer de una sintaxis fácil de entender y comprender qué sucederá al ser ejecutada.
Compatibilidad
Los Callbacks son funciones que no necesitan convertir tu código con un polyfill para que funcionen con todos los navegadores modernos o versiones anteriores.
Desventajas
Entre las principales desventajas podemos encontrar que disponen de una estructura que puede llegar a ser robusta, más cuando anidamos llamadas a otras funciones, su flujo se puede volver poco intuitivo lo cual nos hará no comprender claramente su estructura.
Manejo de Errores, con los Callbacks no tenemos un camino claro para manejar los errores lo cual se traduce en problemas a la hora de manejar la lógica de nuestro programa.
Promesas Ventajas
Flujo fluido
Con las promesas podemos manejar un flujo complejos, anidar llamadas y tener una sintaxis clara que nos permite entender nuestro programa o la lógica que implica su uso. Manejo de Errores
Las promesas nos proporcionan un forma clara de manejar errores, una sintaxis sencilla y una forma de entender qué sucederá cuando sean ejecutadas.
Desventajas
PolyFill
Las promesas no son compatibles con todos los navegadores, si bien los navegadores modernos pueden interpretar sin problema alguno, navegadores como internet explorer 11 necesitan transpilar el código para que funcionen correctamente.
Async/Await Ventajas
Sintaxis
Tienen una sintaxis muy simple y clara de leer, lo que nos permite entender de forma muy
   
sencilla su funcionamiento.
Try/catch
Podemos utilizar try/catch para el manejo de errores con lo cual podemos manejar una sintaxis clara para el manejo de los errores.
Desventajas
Polyfill
Como las promesas, Async/Await aún no tienen toda la compatibilidad con los navegadores viejos, por lo cual necesitamos transpilar nuestro código para utilizarlos en cualquier navegador.
Conclusiones
Ahora que entiendes las ventajas y desventajas de los callbacks, promesas y async/await puedes tomar la decisión de cuál implementar en tus proyectos, teniendo en cuenta su uso, así como las implementaciones que estés realizando. En lo particular he dejado atrás a los Callbacks para pasar mi lógica que maneje asincronismo a las promesas y en casos particulares utilizar Async/Await.
Cuéntame, ¿cuáles han sido tus observaciones y cómo implementarías mejor estos recursos que dispones para manejar el asincronismo en JavaScript?