import { ObjectId } from "mongodb";

export type personajeDB={
    _id?:ObjectId,
    nombre:string,
    tecnicas:ObjectId[],
    correo:string
}
export type tecnicaDB={
    _id?:ObjectId,
    nombre:string,
    tipo:string
}
export type equiposDB={
    _id?:ObjectId,
    nombre:string,
    lucahdores:ObjectId[],
    correo:string
}
export type tecnica={
    id:string,
    nombre:string,
    tipo:string
}
export type personaje={
    id:string,
    nombre:string,
    tecnicas:tecnica[],
    correo:string
}
export type equipos={
    id:string
    nombre:string,
    luchadores:personaje[],
    correo:string
}