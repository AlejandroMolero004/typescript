import type { ObjectId } from "mongodb";

export type AutorModel={
    _id:ObjectId,
    nombre:string,
    fechaNacimiento:Date,
    nacionalidad:string,
    escritos:ObjectId[]
}

export type LibroModel ={
    _id: ObjectId, // ID único del libro
    titulo: string,
    categoria: string,// Relación con la clase Categoria
    fechaPublicacion: Date
}

export type Autor={
    id:string,
    nombre:string,
    fechaNacimiento:Date,
    nacionalidad:string,
    escritos:Libro[]
}

export type Libro ={
    id: string, // ID único del libro
    titulo: string,
    categoria: string,// Relación con la clase Categoria
    fechaPublicacion: Date
}