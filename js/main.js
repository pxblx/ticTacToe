/**
 * Interfaz gráfica
 * 
 * @author Pablo Murillo Ávila
 */

addEventListener("DOMContentLoaded", function () {

    // Celdas del tablero
    let tablero = [document.getElementById("y0x0"), document.getElementById("y0x1"), document.getElementById("y0x2"),
    document.getElementById("y1x0"), document.getElementById("y1x1"), document.getElementById("y1x2"),
    document.getElementById("y2x0"), document.getElementById("y2x1"), document.getElementById("y2x2")];

    // Espacio donde se muestra el estado de la partida
    let infoP = document.getElementById("infoP"); // Texto de información
    let infoImg = document.getElementById("infoImg"); // Imagen de información

    // Listeners para las celdas
    for (let i = 0; i < 9; i++) {
        tablero[i].addEventListener("click", function () {
            if (tablero[i].className === "") {
                tablero[i].className = ticTacToe.getTurno();
                let resultado = ticTacToe.clickCelda(i);
                if (resultado !== "nada") {
                    if (resultado === "empate") {
                        infoP.innerHTML = "Empate";
                        infoImg.style.display = "none";
                    } else {
                        infoP.innerHTML = "Ha ganado";
                        infoImg.src = "img/" + resultado + ".png";
                    }
                    tablero.forEach(celda => {
                        if (celda.className === "") celda.className = "desactivada";
                    });
                } else {
                    infoImg.src = "img/" + ticTacToe.getTurno() + ".png";
                }
            }
        });
    }

    // Reiniciar la partida
    document.getElementById("reiniciar").addEventListener("click", function () {
        location.reload();
    });
});
