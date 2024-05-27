
/**
 * Esta funcion regresa la imagen de una carta
 * @param {String} carta 
 * @returns {HTMLImageElement} regresa la imagen de una carta
 */
export const crearCartaHTML=(carta)=>{
    if(!carta) throw new Error('La carta es necesario')
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        return imgCarta;
}