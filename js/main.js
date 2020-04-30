/**
 * Interfaz gráfica
 * 
 * @author Pablo Murillo Ávila
 */

addEventListener("DOMContentLoaded", function () {

    // Celdas del tablero
    let tablero = [document.getElementById("y0x0"), document.getElementById("y0x1"),
    document.getElementById("y0x2"), document.getElementById("y1x0"), document.getElementById("y1x1"),
    document.getElementById("y1x2"), document.getElementById("y2x0"), document.getElementById("y2x1"),
    document.getElementById("y2x2")];

    let info = document.getElementById("info"); // Espacio donde se muestra el estado de la partida
    let infoP = info.getElementsByTagName("p")[0]; // Texto de información
    let infoImg = info.getElementsByTagName("img")[0]; // Imagen de información

    // Listeners para las celdas
    for (let i = 0; i < 9; i++) {
        tablero[i].addEventListener("click", function () {
            if (tablero[i].className === "") {
                tablero[i].className = ticTacToe.getTurno();
                let resultado = ticTacToe.clickCelda(i);
                if (resultado !== false) {
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

    // Reiniciar el juego
    document.getElementById("reiniciar").addEventListener("click", function () {
        location.reload();
    });
});
