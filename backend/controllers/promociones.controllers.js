import { promociones } from "../models/promociones.models.js";
const test = (()=>{
    console.log('El controlador de promociones funciona')
})
promociones.create({
    brand:'Xiomi',
    snum:'199910',
    dsrc:'Con una forma icónica y un diseño ergonómico, que te permite escuchar el sonido ambiente natural, y un altavoz optimizado para una mejor experiencia.',
    price:'378'
})
export default test