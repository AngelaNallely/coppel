import { productos } from "../models/productos.models.js";
const test = (() =>{
    console.log('El controlador de productos funciona')
})

productos.create({
    brand:'Bose',
    snum:'199909',
    dscr:'Un sonido intenso y profundo, pero también mantiene el audio privado. Además, el audio envolvente Bose con seguimiento de la cabeza, funciona en cualquier contenido de cualquier fuente.',
    price:'6599'
})
export default test