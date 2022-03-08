# JavaScrip-Basico

EJERCICIO 1 : Crea un archivo JavaScript donde muestres por consola la siguiente frase: "Estoy realizando el curso de
JavaScript,espero aprender mucho"

EJERCICIO 2 : En este ejercicio tienes que crear un archivo JavaScript donde crees una variable la cual contenga una cadena de texto.
  Después crearás una función, dentro de ella crearas una variable que se llame igual que la primera que has creado y le asignaras una cadena de texto diferente                  a la primera y mostrarás la variable por consola.
  Por último, fuera de la función tendrás que realizar la llamada a la función y mostrarás por consola la primera variable que has creado.

EJERCICIO 3 : En este ejercicio tendrás que recorrer los números del 1 al 100 mediante un bucle y que cuando muestre un número par, muestre por pantalla que el número es par, en otro caso tendrá que mostrar que es impar.

  Pista: tendréis que hacer un comprobación dentro del bucle.

EJERCICIO 4 : En el siguiente ejercicio, tendréis que crear un bucle que haga 10 iteraciones y en cada una indique el número de esta.
    Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo".
    
EJERCICIO 5 : Tienes que crear una cadena de texto con una frase, por ejemplo: “El perro de mi vecina es muy molesto” y reemplazar la palabra vecina por vecino. Por consola tienes que mostrar la frase con las palabras cambiadas.

EJERCICIO 6 : En este ejercicio debes que crear otra variable con una cadena de texto y convertir todo el contenido de la cadena a mayúsculas y lo mostraréis por consola.

EJERCICIO 7 : En este ejercicio tendrás que generar 10 números aleatorios que estén comprendidos entre 0 y 20 haciendo uso de un bucle.

EJERCICIO 8 : En este ejercicio tienes que rellenar un array con los números del 10 al 20 y mostrarlo por consola.

EJERCICIO 9 : Crea un archivo "coche.js" que implemente una clase Coche con un constructor con las siguientes características:
    Debe recibir 3 parámetros: peso, potencia y marca.
    Peso y potencia deben ser números, y marca una String.
    La clase debe tener variables de clase en las que se almacene el valor de los parámetros pasados al constructor.
    La clase Coche debe ser exportada como un módulo para poder ser usada desde otros archivos javascript.

EJERCICIO 10 : Modifica el archivo del ejercicio anterior para que los atributos sean privados y tengan sus correspondientes getters y setters.

EJERCICIO 11 : En este ejercicio tienes que crear varias funciones. Las funciones tienen que representar las operaciones básicas de una calculadora: sumar,           restar, multiplicar y dividir.
 En la función de dividir, tendréis que realizar una comprobación para verificar que el segundo número no sea un 0, en el caso de que sea un 0 tendréis que mostrar el mensaje “No se puede dividir por cero”.
 Tienes que mostrar los resultados por consola.
 
EJERCICIO 12 : En este ejercicio tienes que crear un archivo javascript que contenga una función llamada eliminarUltimo() que reciba como parámetro un array y elimine el último elemento de este.
 
EJERCICIO 13 : En el mismo archivo del ejercicio 2, modifica la función para que alerte al usuario cuando el parámetro no sea un array o este esté vacío.
 Si el parámetro es un array con más de un elemento, la función debe realizar lo descrito en el ejercicio anterior.

EJERCICIO 14 : Crea un archivo "ejercicio.js" que contenga una función sumar(a, b) que reciba dos parámetros y devuelva la suma de estos.
 En caso de que uno de los parámetros no sea un número, la función debe lanzar un error que indique el problem

EJERCICIO 15 : En el mismo archivo del ejercicio anterior ("ejercicio.js"), debes hacer uso de la función suma(a, b) que acabas de crear y proteger tu código para que, intencionadamente, podamos pasar un parámetro que no sea un número sin que salte un error que finalice el programa.
 En el catch, puedes poner un mensaje de aviso indicando que ese no es el uso correcto de la función.
 
 EJERCICIO 16 : Crea un archivo "libreria.js" en el que implementes dos funciones:
Una función saludar(String) que reciba como parámetro un nombre e imprima por consola "Hola, " + el parámetro.
Otra función hora() que devuelva en el return la hora actual del sistema.
Para la segunda función debes utilizar la librería "moment.js". Ambas funciones creadas deben ser exportadas para su posterior uso desde otro archivo Javascript.

 EJERCICIO 17 : Crea un archivo "main.js" que importe el archivo "libreria.js" del ejercicio anterior y ejecute el siguiente código.
 saludar("Alberto"); console.log("Son las " + hora());
 
 EJERCICIO 18 : 
En este ejercicio tendréis que crearla clase figura que tiene que tener como atributo _color
 El constructor de Figura debe recibir como parámetro el valor del color y almacenarlo en _color.
 Ya que la variable _color es privada, tenéis que crear un getter getColor() y un setter setColor(String).
 
 EJERCICIO 19 : En este segundo ejercicio tendréis que crear dos clases, Circulo y Rectángulo, las cuales deben de heredar de Figura.
 Circulo debe recibir dos parámetros en el constructor: radio (number) y color (String).
 Rectángulo debe recibir tres parámetros en el constructor: base (number), altura (number) y color (String).
 Los atributos de estas clases deben ser públicos.
 
 EJERCICIO 20 : 
Como último ejercicio, tendréis que crear un método calcularArea() en la clase Figura que devuelva el valor -1 para indicar que nuestra figura genérica no tiene área.
 Implementa ese mismo método en las clases Circulo y Rectángulo que devuelvan el área de la figura en base a sus atributos.
 Para calcular el área del círculo, PI puede ser 3.14 simplemente, sin más decimales.**
 
 EJERCICIO 21 : Vamos a crear un div que será un rectángulo , o la forma geométrica que prefiráis.
 El objetivo es que al entrar en ese rectángulo con nuestro ratón, el fondo se establezca como blanco, mientras que cuando salga, este cambie a un color aleatorio
Para ello tendremos que crear tres funciones:
Una que genere y devuelva un código de color (con su almohadilla #)
Otra que aplique ese nuevo código de color al fondo y
Por último una función que establezca el color en blanco de nuevo.
 
EJERCICIO 22 :
Vamos a realizar ahora una especie de "juego" en el que tendremos que adivinar las coordenadas de un lugar emblemático del mundo de entre tres opciones. La manera de seleccionar una respuesta será copiando las coordenadas.
Al copiar la línea correcta, un aviso los aparecerá en la pantalla mediante un alert, si no acertamos también lo notificará.
 
EJERCICIO 23 : Por último vamos a hacer un ejercicio que va a interactuar con un div en concreto.
El objetivo es crear un div cuadrado que cambie de color cuando hacen click sobre el y que cambie de forma a un círculo al hacer doble click.
Recuerda que ya hemos visto una función que cambia el color de fondo en el primer ejercicio.

EJERCICIO 24 : En este ejercicio tendréis que crear una aplicación node con express que mostrará una lista de nombres al entrar en una url en concreto.
De esta manera veremos cómo confeccionar de manera correcta el manejador de rutas con Express y cómo mostrar los elementos en una lista.
Tendréis que crear una lista de nombres con una función para devolverlos. Crearéis la carpeta controllers en la raíz del proyecto. Dentro de esta, irá el archivo que contenga la función para devolver los nombres.
Por último, tendréis que crear las plantillas par poder mostrar los nombres mediante HTML.
Tendréis que subir el proyecto al campus.

EJERCICIO 25: En este ejercicio, lo primero que tendréis que crear es un archivo HTML que contenga un header con un título y una sección que contendrá un botón y un mapa. Al pulsar el botón se hará una llamada al script y mostrará vuestra localización en un mapa.
En el script, crearéis una función que se llamará verLocalizacion donde se utilizará el método getCurrentPosition y le pasaréis como parámetros las funciones verPosicion y verError.
En la función verPosicion le pasaremos como parámetro nuestra posición.
Dentro de la función crearéis dos variables: una contendrá las coordenadas de nuestra posición (latitud y altitud) y la otra variable tendrá la imagen de google maps con nuestra posición para luego insertarlo en el div que hemos creado con su identificador para que muestre el mapa.
Y la función verError contendrá los casos de error con los que nos podremos encontrar.

