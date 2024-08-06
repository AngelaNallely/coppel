import { model } from "mongoose";
import { empleado } from "./empleados.models.js";
export const gerentes = new model('gerentes', empleado)
