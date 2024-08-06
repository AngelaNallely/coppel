import { empleados } from "../models/empleados.models.js";
const test = (()  =>{
    console.log('El controladoor de empleados funciona')
})
empleados.create({
    name:'Daniel',
    apep:'Gallellos',
    apema:'Luna',
    age:'20'
})
export default test