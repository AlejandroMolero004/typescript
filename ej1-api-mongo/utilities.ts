import type { Collection } from "mongodb";
import type { Autor, AutorModel, Libro, LibroModel } from "./types.ts";

export const frommodeltoauthor=async(model:AutorModel,bookcollection:Collection<LibroModel>):Promise<Autor>=>{
    console.log("dentro de frommodeltoauthor")
    const librosAutor=await bookcollection.find({_id:{$in:model.escritos}}).toArray(); 
    return {
    id:model._id!.toString(),
    nombre:model.nombre,
    fechaNacimiento:model.fechaNacimiento,
    nacionalidad:model.nacionalidad,
    escritos:librosAutor.map((l)=>(frommodeltolibro(l))),
    }
}

export const frommodeltolibro=(model:LibroModel):Libro=>{
    return{
        id: model._id!.toString(), // ID único del libro
        titulo: model.titulo,
        categoria:model.categoria, // Relación con la clase Categoria
        fechaPublicacion: model.fechaPublicacion
    }
}