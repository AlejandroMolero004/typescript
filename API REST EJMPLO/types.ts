import { ObjectId, type OptionalId} from "mongodb";

export type bookModel=OptionalId<{
    title:string,
    pages:number
}>

export type userModel=OptionalId<{
    name:string,
    age:number,
    email:string,
    books:ObjectId[]
}>

export type Book={
    id:string
    title:string,
    pages:number
   
}

export type user={
    id:string
    name:string,
    age:number,
    email:string,
    books:Book[]
}