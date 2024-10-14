// Declarar la variable que almacenará el tamaño actual de los círculos
let circleSize;

// Configuración inicial: crear un lienzo del tamaño de la ventana
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(20); // Mantener el fondo negro en cada frame para evitar solapamiento de círculos
  fill(255); // Color de los círculos: blanco
  noStroke(); // Sin borde en los círculos

  // Comprobar si el mouse se movió en el eje y
  // Si mouseY (posición actual en y) es diferente a pmouseY (posición previa en y)
  if (mouseY !== pmouseY) {
    // Mapear el tamaño del círculo según la posición de mouseY
    // Cuando el mouse esté arriba, el tamaño será 20; cuando esté abajo, será 2
    circleSize = map(mouseY, 0, windowHeight, 20, 2);
  }

  // Determinar el espacio entre los círculos según la posición del mouse en el eje x
  // A mayor valor de mouseX, mayor separación entre los círculos
  let spacing = map(mouseX, 0, windowWidth, 20, 100); // Mapear mouseX a un rango de separación de 20 a 100 píxeles

  // Bucle para dibujar los círculos con separación dinámica
  for (let x = 20; x < windowWidth; x += spacing) {
    for (let y = 20; y < windowHeight; y += spacing) {
      circle(x, y, circleSize || 5); // Dibujar círculo de tamaño aleatorio entre 2 y 10 píxeles
    }
  }
}
