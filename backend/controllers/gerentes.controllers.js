import { gerentes } from "../models/gerentes.models.js";
const test = (()  =>{
    console.log('El controladoor de gerentes funciona')
})
gerentes.create({
    name:'Daniel',
    apep:'Gallegos',
    apema:'Luna',
    age:'20'
})
export default test