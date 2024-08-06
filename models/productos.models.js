import { Schema, model } from "mongoose";

export const producto = new Schema({
    brand:{
        type:String
    },
    snum:{
        type:Number
    },
    dscr:{
        type:String
    },
    price:{
        type:Number
    }
})

export const productos = new model('productos', producto)