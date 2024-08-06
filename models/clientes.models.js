import { Schema, model } from "mongoose";

export const cliente = new Schema({
    name:{
        type:String
    },
    apep:{
        type:String
    },
    apema:{
        type:String
    },
    age:{
        type: Number
    },
    bdc:{
        type:String
    },
    acnum:{
        type:String
    }
})

export const clientes = new model('clientes', cliente)