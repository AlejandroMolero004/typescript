import { MongoClient } from 'mongodb'
import { equiposDB, personajeDB, tecnicaDB } from "./types.ts";
import { frommodeltoequipo, frommodeltopersonaje, frommodeltotecnica } from "./utilities.ts";
const MONGO_URL = Deno.env.get("MONGO_URL")
if(!MONGO_URL){
  console.error("MONGO_URL is not set");
  Deno.exit(1);
}
const cliente= new MongoClient(MONGO_URL)
await cliente.connect()
const db=cliente.db("JujutsuKaisen")//mola
const coleccionpersonajes=db.collection<personajeDB>("personaje")
const colecciontecnicas=db.collection<tecnicaDB>("tecnica")
const coleccionequipos=db.collection<equiposDB>("equipos")

const handler=async(req:Request):Promise<Response>=>{
  const metodo=req.method
  const url=new URL(req.url)
  const path=url.pathname;

  if(metodo==="GET"){
    if(path=="/users"){
      const nombre=url.searchParams.get("nombre")
      if(nombre){
        const usersDB=coleccionpersonajes.find({nombre:nombre}).toArray() //await Coleccionespersonajes.
        const users=await Promise.all((await usersDB).map((elem) => frommodeltopersonaje(elem,colecciontecnicas)))
        return new Response(JSON.stringify(users))
      }
      else{
        const usersDB=coleccionpersonajes.find().toArray() //await Coleccionespersonajes.
        const users=await Promise.all((await usersDB).map((elem) => frommodeltopersonaje(elem,colecciontecnicas)))
        return new Response(JSON.stringify(users))
      }
    }
    if(path=="/tecnicas"){
      const nombre=url.searchParams.get("nombre")
      if(nombre){
        const tecnicaDB=colecciontecnicas.find({nombre:nombre}).toArray()
        const tecnica=await Promise.all((await tecnicaDB).map((t)=>frommodeltotecnica(t)))
        return new Response(JSON.stringify(tecnica))
      }
      else{
        const tecnicaDB=colecciontecnicas.find().toArray()
        const tecnica=await Promise.all((await tecnicaDB).map((t)=>frommodeltotecnica(t)))
        return new Response(JSON.stringify(tecnica))
      }
    }
    if(path=="/equipos"){
      const nombre=url.searchParams.get("nombre")
      if(nombre){
      const equipoDB=coleccionequipos.find({nombre:nombre}).toArray()
      const equipo=await Promise.all((await equipoDB).map((e)=>frommodeltoequipo(e,coleccionpersonajes,colecciontecnicas)))
      return new Response(JSON.stringify(equipo))
      }
      else{
        const equipoDB=coleccionequipos.find().toArray()
        const equipo=await Promise.all((await equipoDB).map((e)=>frommodeltoequipo(e,coleccionpersonajes,colecciontecnicas)))
        return new Response(JSON.stringify(equipo))
      }
      
    }
  }

  return new Response("endpoint not found")
}

Deno.serve({port:3000},handler)