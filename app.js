import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import test_clientes  from "./backend/controllers/clientes.controllers.js"
import test_empleados from "./backend/controllers/empleados.controllers.js"
import test_gerentes from "./backend/controllers/gerentes.controllers.js"
import test_productos from "./backend/controllers/productos.controllers.js"
import test_promociones from "./backend/controllers/promociones.controllers.js"

dotenv.config()

mongoose.connect(process.env.url_bd)

.then(() =>{
    console.log('La promesa funciona')
})
.catch((err) =>{
    console.log('La promesa no funciono')
})

const app= express()
app.use(cors())

app.listen(4003,() =>{
    console.log('El servidor si escucha')
})
test_clientes()
test_empleados()
test_gerentes()
test_productos()
test_promociones()