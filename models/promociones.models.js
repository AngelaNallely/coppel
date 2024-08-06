import { model } from "mongoose";
import { producto } from "./productos.models.js";
export const promociones = new model('promociones', producto)