import { Collection, ObjectId } from "mongodb";
import { personajeDB, tecnica, tecnicaDB,personaje } from "./types.ts";
import { equiposDB } from "./types.ts";
import { equipos } from "./types.ts";

export const frommodeltopersonaje=async(personaje:personajeDB,tecnicas:Collection<tecnicaDB>):Promise<personaje>=>{
    const t=await tecnicas.find({_id:{$in:personaje.tecnicas}}).toArray()

    return {
        id:personaje._id!.toString(),
        nombre:personaje.nombre,
        tecnicas:t.map((t)=>frommodeltotecnica(t)),
        correo:personaje.correo
    }
}
export const frommodeltotecnica=(tecnica:tecnicaDB):tecnica=>{
    const NewTecnica:tecnica = {
        id:tecnica._id!.toString(),
        nombre:tecnica.nombre,
        tipo:tecnica.tipo
    }
    return NewTecnica
}


//async function "nombre" (parametros):que devuelve {}

export const frommodeltoequipo=async(equipo:equiposDB,personajes:Collection<personajeDB>,tecnicas:Collection<tecnicaDB>):Promise<equipos>=>{

    const luchadoresId:ObjectId[] = equipo.lucahdores

    const lucahdores:personajeDB[] = await personajes.find({_id:{$in:luchadoresId}}).toArray()

    return{
        id: equipo._id!.toString(),
        nombre:equipo.nombre,
        luchadores: await Promise.all(lucahdores.map((elem:personajeDB) => frommodeltopersonaje(elem,tecnicas))),
        correo:equipo.correo
    }

}