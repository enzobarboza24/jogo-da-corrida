function setup() {
    createCanvas(400, 400);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    if (focused == true) {
      background("#D2EBB5");
    } else {
      background("rgb(2,78,98)");
    }
  
    textSize(40);
    text("👿", xJogador1, 100);
    text("💀", xJogador2, 300);
    rect(350, 0, 10, 400);
    if (xJogador1 > 350) {
      text("Jogador 1 vai corinthians!", 50, 200);
      noLoop();
    }
    if (xJogador2 > 350) {
      text("Jogador 2 gol do corinthians!", 50, 200);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "a") {
      xJogador1 += random(40);
    }
    if (key == "s") {
      xJogador2 += random(40);
    }
  }