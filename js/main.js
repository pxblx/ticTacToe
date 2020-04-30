/**
 * Interfaz gráfica
 * 
 * @author Pablo Murillo Ávila
 */

addEventListener("DOMContentLoaded", function () {

    // Elementos del tablero
    let tablero = [document.getElementById("y0x0"), document.getElementById("y0x1"), 
    document.getElementById("y0x2"), document.getElementById("y1x0"), document.getElementById("y1x1"), 
    document.getElementById("y1x2"), document.getElementById("y2x0"), document.getElementById("y2x1"), 
    document.getElementById("y2x2")];

    let info = document.getElementById("info"); // Espacio donde se muestra el turno actual o la jugada ganadora
    let infoP = info.getElementsByTagName("p")[0]; // Texto de información
    let infoImg = info.getElementsByTagName("img")[0]; // Imagen de información

    // Listeners para el tablero
    for (let i = 0; i < 9; i++) {
        tablero[i].addEventListener("click", function () {
            let turno = ticTacToe.getTurno();
            this.className = turno;
            let resultado = ticTacToe.clickFicha(i);
            if (resultado !== false) {
                infoP.innerHTML = "Han ganado las";
                infoImg.src = "img/" + turno + ".png";
            } else {
                infoImg.src = "img/" + ticTacToe.getTurno() + ".png";
            }
            this.parentNode.replaceChild(this.cloneNode(true), this);
        });
        
    }

    // Reiniciar el juego
    document.getElementById("reiniciar").addEventListener("click", function () {
        location.reload();
    });
});
