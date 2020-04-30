/**
 * ticTacToe
 * 
 * @author Pablo Murillo Ávila
 */

let ticTacToe = (function () {
    let tablero = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // Tablero del juego
    let turno = "X"; // Turno acual

    /**
     * Click en una ficha del tablero
     * 
     * @param {Number} y Coordenada y del tablero
     * @param {Number} x Coordenada x del tablero
     * 
     * @returns {Boolean} true si es jugada ganadora o false si no lo es
     */
    let clickFicha = function (y, x) {
        tablero[y][x] = turno === "X" ? 2 : 3; // Colocar ficha (2 para las X y 3 para las O)
        turno = turno === "X" ? "O" : "X"; // Cambio de turno

        // Jugada ganadora (por hacer...)
        return false;
    }

    /**
     * Devolver el turno actual
     * 
     * @returns {Number} Turno actual
     */
    let getTurno = function () {
        return turno;
    }

    return {
        clickFicha: clickFicha,
        getTurno: getTurno
    }
})();
