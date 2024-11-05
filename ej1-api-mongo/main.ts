import {MongoClient}from "mongodb"
import type { AutorModel, LibroModel } from "./types.ts";
import {frommodeltoauthor, frommodeltolibro} from "./utilities.ts"

const MONGO_URL=Deno.env.get("MONGO_URL")

if(!MONGO_URL){
  console.log("url is not set");
  Deno.exit(1);
}

const cliente=new MongoClient(MONGO_URL)
await cliente.connect();

const db=cliente.db("libereria")

const coleccionlibros=db.collection<LibroModel>("libros")
const coleccionautores=db.collection<AutorModel>("autor")

const handler = async (req: Request): Promise<Response> => {
  const method = req.method;
  const url = new URL(req.url);
  const path = url.pathname;

  if(method==="GET"){
    if(path==="/users"){
      const nombre=url.searchParams.get("nombre")
      if(nombre){
        console.log("dentro de if nombre")
        const userDB=await coleccionautores.find({nombre:nombre}).toArray();
        console.log(userDB)
        const users=await Promise.all(userDB.map((u)=>frommodeltoauthor(u,coleccionlibros)))
        return new Response(JSON.stringify(users))
      }
      else{
        const userDB=await coleccionautores.find().toArray();
        const users=await Promise.all(userDB.map((u)=>frommodeltoauthor(u,coleccionlibros)))
        return new Response(JSON.stringify(users))
      }
    }
    if(path==="/libros"){
      const titulo=url.searchParams.get("titulo")
      if(titulo){
        const libroDB=await coleccionlibros.find({titulo:titulo}).toArray();
        const libros=await Promise.all(libroDB.map((l)=>frommodeltolibro(l)))
        return new Response(JSON.stringify(libros))
      }
      else{
        const libroDB=await coleccionlibros.find().toArray();
        const libros=await Promise.all(libroDB.map((l)=>frommodeltolibro(l)))
        return new Response(JSON.stringify(libros))
      }
    }
  }
  if(method==="DELETE"){
    if(path=="/libros"){
      const titulo=url.searchParams.get("titulo")
      if(titulo){
        coleccionlibros.deleteOne({titulo:titulo})
        return new Response("libro eliminado")
      }
      return new Response("no se ha encontrado el libro")
    }
    if(path=="/autor"){
      const nombre=url.searchParams.get("nombre")
      if(nombre){
        coleccionautores.deleteOne({nombre:nombre})
        return new Response("autor eliminado")
      }
      return new Response("no se ha encontrado el autor")
    }
  }
  if(method==="POST"){
    if(path=="/users"){
    const autor:AutorModel= await req.json()
    coleccionautores.insertOne(autor)
    return new Response("duuuuuro")
    }
  }


  return new Response("metodo no encontrado")
}

Deno.serve({port:3000},handler)