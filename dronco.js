

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
  
  }
  
  function preload() {
  
  
   
  }
  
  
  
  
  function draw() {
  
    // Establece el grosor del stroke (trazo) a 13.
    strokeWeight(13);
    // Establece el color del stroke (trazo) a negro.
    stroke(0);
    // Si el mouse está presionado, dibuja una línea entre la posición previa y la actual del mouse.
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
  
  function tronco(){
  background("green")
  }
  
  
  