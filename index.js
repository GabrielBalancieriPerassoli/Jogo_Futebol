var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "darkgreen";
pincel.fillRect(0, 0, 600, 400);

var bola = {
    x: 300,
    y: 200,
    raio: 10,
    desenha() {
        pincel.fillStyle = 'white';
        pincel.beginPath();
        pincel.arc(bola.x, bola.y, bola.raio, 0, 2 * Math.PI);
        pincel.fill();
    } 
}

var traveE = {
    x: 10,
    y: 100,
    largura: 10,
    altura: 200,
    desenha() {
        pincel.fillStyle = "grey";
        pincel.fillRect(traveE.x, traveE.y, traveE.largura, traveE.altura);

    }
}

var traveD = {
    x: 580,
    y: 100,
    largura: 10,
    altura: 200,
    desenha() {
        pincel.fillStyle = "grey";
        pincel.fillRect(traveD.x, traveD.y, traveD.largura, traveD.altura);

    }
}

var seuPlacar = 0;
var placarAdversario = 0;

function movimenta(evento) {
    if(evento.key == "ArrowUp") bola.y = bola.y - 10;  
    if(evento.key == "ArrowDown") bola.y = bola.y + 10;  
    if(evento.key == "ArrowRight") bola.x = bola.x + 10;  
    if(evento.key == "ArrowLeft") bola.x = bola.x - 10;
    if(bola.x == bola.raio) {
        if(bola.y > 100 && bola.y < 300) {
            var gol = document.getElementById("gol");
            gol.innerHTML = "GOL :)";
            seuPlacar++;

            var placar = document.getElementById("placar");
            placar.innerHTML = `${seuPlacar} x ${placarAdversario}`;

            bola.x = 300
            bola.y = 200
        }
    } 
    if(bola.x == 600 - bola.raio) {
        if(bola.x > 100 && bola.y < 300) {
            var gol = document.getElementById("gol");
            gol.innerHTML = "GOL CONTRA :(";
            placarAdversario++;

            var placar = document.getElementById("placar");
            placar.innerHTML = `${seuPlacar} x ${placarAdversario}`;

            bola.x = 300
            bola.y = 200
        }
    }
}

document.onkeydown = movimenta;

function loop() {
    pincel.clearRect(0, 0, 600, 400);
    bola.desenha();
    traveE.desenha();
    traveD.desenha();
    pincel.fillText("Gol Adversario", 5, 85)
    pincel.fillText("Seu gol", 560, 85)
    requestAnimationFrame(loop);
}

var contagem = 4;

function contagemRegressiva() {
    contagem--;
    if(contagem > 0) { 
        var contador = document.getElementById("comeco");
        contador.innerHTML = contagem;
        contador.innerHTML = "GO";
    }    
}
setInterval(contagemRegressiva, 1000)
loop();