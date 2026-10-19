function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(138, 100, 66);
  
  let numCiambelle =50;
  let numColonne = ceil(sqrt(numCiambelle));
  let numRighe = ceil(numCiambelle / numColonne);

  let spazioX = windowWidth / numColonne;
  let spazioY = windowHeight / numRighe;

  let xCorrente = 0;
  let yCorrente = 0;

  for (let g = 0; g < numCiambelle; g++) {
    // ad ogni gusto verrà assegnato un numero. faccio generare in modo casuale quel numero in modo da scegliere casualmente il gusto
    let gusto = random(0, 3); 
    
    ciambella(xCorrente + spazioX / 2, yCorrente + spazioY / 2, gusto);
    xCorrente = xCorrente + spazioX;
    
    if (xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente = yCorrente + spazioY;
    }
  }
}

function ciambella(x, y, gusto) {
  push();
    translate(x, y);
    
    //Ciambella
    fill(235, 207, 173);
    noStroke();
    ellipse(0, 20, 170, 90);
    
    //Glassa
    let wGlassa = 150;
    let hGlassa = 50;
    let rx = wGlassa / 2;
    let ry = hGlassa / 2;
    
    //Colore glassa
    if (gusto <= 1) {
      fill(85, 40, 12);
    } else if (gusto <= 2) {
      fill(177, 207, 163);
    } else if (gusto <= 3) {
      fill(255, 183, 213);
    }
    
    ellipse(0, 0, wGlassa, hGlassa);

    //Canditi
    let numCanditi = random(20,30); 
    
    for (let i = 0; i < numCanditi; i++) {

      // Ho usato l'intelligenza artificiale per calcolare lo spazio dentro cui potevano stare i canditi dettando io il ragionamento dietro. In pratica non ricordavo la formula dell'ellisse.
      let angolo = random(0, 2*PI);
      let distanza = random(0, 1);
      
      let canditoX = rx * distanza * cos(angolo);
      let canditoY = ry * distanza * sin(angolo);
      
      let equazioneEllisse = ((canditoX * canditoX) / (rx * rx)) + ((canditoY * canditoY) / (ry * ry));
      
      if (equazioneEllisse <= 1) {

        let coloreCandito = random(0, 6); 
        
        if (coloreCandito < 1) {
          fill(255, 105, 180);
        } else if (coloreCandito <= 2) {
          fill(76, 175, 80);
        } else if (coloreCandito <= 3) {
          fill(33, 150, 243);
        } else if (coloreCandito <= 4) {
          fill(255, 255, 255);
        } else if (coloreCandito <= 5) {
          fill(255, 235, 59);
        } else {
          fill(244, 67, 54);
        }

        circle(canditoX, canditoY, 5); 
      } 
      else {
        i = i - 1;
      }
    }

      //Buco
      fill(138, 100, 66); 
      ellipse(0, 0, 150/4, 50/4);
    
  pop();
}
