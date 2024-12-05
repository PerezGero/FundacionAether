// Array con las opciones de imágenes y textos
// utilizo las variables de un array para buscar la imagen que se requiera y un texto que la acompañe.
const opciones = [
    { imagen: "../../img/Ultraabismo.png", texto: " Las Nihilego son originarias del Ultraabismo, un paramo sombrio en el cual, cada cuerpo de roca tiene una fuerza gravitatoria propia, ellas se encuentran flotando por las sombras, como si estuvieran asechando a una posible presa. " },
    { imagen: "../../img/Ultradesierto.png", texto: " Las Pheromosas provienen del Ultradesierto, un ugar arido y desolado, en el cual hay kilometros y kilometros de nada, quizas por esto desarrollaron su velocidad al maximo, para moverse de punto A a punto B rapido para evitar el sol abrazador. " },
    { imagen: "../../img/Ultragenerador.png", texto: " Los Xurkitrees provienen del Ultragenerador, una dimension en una tormenta electrica permanente, sin embargo, estos no se ven afectados, ya que muchos solamente se quedan parados en la sima de una montaña esperando una descarga o bailando sobre laderas que parecen cables electricos. " },
    { imagen: "../../img/Ultrabosque.png", texto: " Los Kartanas provienen del Ultrabosque, un lugar que se asemeja a un jardin zen, un aura de tranquilidad rodea este habitat, en el cual sorprendentemente no todo esta cortado por los kartanas, parece haber una roca en el medio del jardin a la que ninguno daña, sera esta alguna costumbre de la especie quizas. " },
    { imagen: "../../img/Ultrajungla.jpg", texto: " El especimen Stakataka proviene de lo bajo de la Ultrajungla, se suelen desplazar lentamente por los arboles frondozos de este habitat, hemos visto muchos monticulos de bloques a lo largo de nuestro recorrido, creemos que seran Stakatakas en un estado de reposo. " },
    { imagen: "../../img/Ultropolis.png", texto: " El lugar del que dice probenir la Unidad Ultra y los Ultraentes Poipole y Naganadel se hace llamar Ultropolis, por desgracia no nos fue capaz sacar mucha informacion de este lugar, al entrar muchos de nustros dispositivos fallaron y solo pudimos sacar esta foto." },
];

// Función para mostrar una imagen y texto aleatorio
function mostrarAleatorio() {
    // Selecciona una variable aleatorio del array, tomando en cuanta el largo del array
    const aleatorio = Math.floor(Math.random() * opciones.length); 
    // Obtiene el objeto aleatorio del array y se lo atribuimos a la constante seleccion
    const seleccion = opciones[aleatorio]; 

    // Agarra los elementos del DOM con los ID imagenAleatoria y textoAleatorio para modificarlos con los que salieron del array
    const imagen = document.getElementById("imagenAleatoria");
    const texto = document.getElementById("textoAleatorio");

    // Actualiza la ruta de la imagen
    imagen.src = seleccion.imagen; 
    // Muestra la imagen aleatoria
    imagen.style.display = "block"; 
    // Actualiza el texto
    texto.textContent = seleccion.texto; 
}