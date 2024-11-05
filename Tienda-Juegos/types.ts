import { ObjectId, type OptionalId } from "mongodb";

export type gameModel=OptionalId<{
   nombre:string
   precio:number
}>;
  
export type userModel=OptionalId<{
    nombre:string
    edad:number
    juegos:ObjectId[]
}>;

export type game={
    id:string,
    nombre:string,
    precio:number
}

export type user={
    id:string
    nombre:string
    juegos:game[]
}