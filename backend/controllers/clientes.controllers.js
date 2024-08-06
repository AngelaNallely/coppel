import { clientes } from "../models/clientes.models.js";

// Función que realiza un log y crea un cliente
const initializeClientes = () => {
    console.log('Está funcionando el controlador de clientes');
    clientes.create({
        name: 'Angela',
        apep: 'Luna',
        apema: 'Fabian',
        age: '20',
        bdc: 'Está en buró de crédito',
        acnum: '22030672'
    });
};

// Exportar la función
export default initializeClientes;
