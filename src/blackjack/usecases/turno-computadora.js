import { pedirCarta,valorCarta,crearCartaHTML } from "./";

/**
 * Funcion que realiza el juego del turno de la compirtadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora  elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */

//podemos inicializar por defecto el deck en un arreglo vacio para evitarnos el if 
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,  deck=[] ) => {
    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if(!puntosHTML) throw new Error('puntosHTML es necesario ');
    // if(!deck) throw new Error('El deck es necesario');

    //declaramos puntos computadora dentro de la funcion
    let puntosComputadora=0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta=crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
