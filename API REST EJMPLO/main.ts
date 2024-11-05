import { MongoClient, ObjectId } from "mongodb";
import type { bookModel, userModel } from "./types.ts";
import {frommodeltobook, frommodeltouser} from "./utilities.ts"
const MONGO_URL=Deno.env.get("MONGO_URL")

if(!MONGO_URL){
  console.error("MONGO_URL is not set");
  Deno.exit(1);
}

const cliente= new MongoClient(MONGO_URL)
await cliente.connect();
const db =cliente.db("Libreria")
const bookcollection=db.collection<bookModel>("book")
const usercollection=db.collection<userModel>("user")

const handler=async(req:Request):Promise<Response>=>{
  const url=new URL(req.url);
  const metodo=req.method;
  const path=url.pathname;

  if(metodo==="GET"){
    if(path=="/users"){
      const name=url.searchParams.get("name")
      if(name){
        const useDB=await usercollection.find({name}).toArray()
        const users=await Promise.all(useDB.map((u)=>frommodeltouser(u,bookcollection)))
        console.log(users)
        return new Response(JSON.stringify(users))
      }
      else{
        const useDB=await usercollection.find().toArray()
        const users=await Promise.all(useDB.map((u)=>frommodeltouser(u,bookcollection)))
        console.log(users)
        return new Response(JSON.stringify(users))
      }
    }
    if(path=="/books"){
      const title=url.searchParams.get("title")
      if(title){
        const bookDB=await bookcollection.find({title}).toArray()
        const book=await Promise.all(bookDB.map((b)=>frommodeltobook(b)))
        return new Response(JSON.stringify(book))
      }
      else{
        const bookDB=await bookcollection.find().toArray()
        const book=await Promise.all(bookDB.map((b)=>frommodeltobook(b)))
        return new Response(JSON.stringify(book))
      }
    }
  }
  if(metodo=="POST"){
    if(path=="/user"){
      const user= await req.json()
      if(!user.name||!user.age||!user.email||!user.books){
        return new Response("Bad request",{status:400})
      }
      const userDB=await usercollection.findOne({email:user.email})
      if(userDB){
        return new Response("User already exists", { status: 409 });
      }
      else{
        const { insertedId } = await usercollection.insertOne({
         name:user.name,
         age:user.age,
         email:user.email,
         books:[]
        });
        return new Response(
          JSON.stringify({
            name: user.name,
            email: user.email,
            age: user.age,
            books: [],
            id: insertedId,
          }),
          { status: 201 }
        );
      }
      
    }
    if(path=="/books"){
      const book= await req.json()
      if(!book.title||!book.pages){
        return new Response("Bad request",{status:400})
      }
      const bookDB=await bookcollection.findOne({title:book.title})
      if(bookDB){
        return new Response("Book already exists", { status: 409 });
      }
      else{
        const{insertedId}=await bookcollection.insertOne({
          title:book.title,
          pages:book.pages
        });
        return new Response(JSON.stringify({
          title:book.title,
          pages:book.pages,
          id:insertedId
        }))
      }
    }
  }
  return new Response("metodo no encontrado")

}

Deno.serve({port:3000},handler)