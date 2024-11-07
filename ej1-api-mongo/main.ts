import {MongoClient, ObjectId}from "mongodb"
import type { AutorModel, LibroModel } from "./types.ts";
import {frommodeltoauthor, frommodeltolibro} from "./utilities.ts"

const MONGO_URL=Deno.env.get("MONGO_URL")

if(!MONGO_URL){
  console.log("url is not set");
  Deno.exit(1);
}

const cliente=new MongoClient(MONGO_URL)
await cliente.connect();//esperamos a que se conecte 

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
        const libroDB=await coleccionlibros.find({titulo:titulo}).toArray()
        const libro=await Promise.all(libroDB.map((l)=>frommodeltolibro(l)))
        coleccionlibros.deleteOne({titulo:titulo})
        coleccionautores.deleteOne({escritos:libro[0].id})
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
    const autor= await req.json()
    if(!autor.nombre||!autor.fechaNacimiento||!autor.nacionalidad||!autor.escritos){
        return new Response("BAD RQUEST",{status:400})
    }
    const autordb=await coleccionautores.findOne({nombre:autor.nombre})
    if(!autordb){ 
      const{insertedId}=await coleccionautores.insertOne({
      nombre:autor.nombre,
      fechaNacimiento:autor.fechaNacimiento,
      nacionalidad:autor.nacionalidad,
      escritos:[]
      })
      return new Response("Insertado")
    }
    else{
    return new Response("User already exists",{status:409})
    }
    }
    if(path=="/books"){
      const book= await req.json()

      if(!book.titulo||!book.titulo||!book.fechaPublicacion||!book.categoria){
        return new Response("BAD RQUEST",{status:400})
      }
      const bookDB=await coleccionlibros.findOne({titulo:book.titulo})
      if(bookDB===null){
        console.log("lo voy a insertar")
        const{insertedId}=await coleccionlibros.insertOne({ 
          titulo: book.titulo,
          categoria:book.categoria,
          fechaPublicacion:book.fechaPublicacion
        })
        return new Response(`Libro insertado con ID ${insertedId}`, { status: 201 });
      }
      else{
        return new Response("ya hay uno")
      }     
    }
  }
  if(method==="PUT"){
    if(path=="/users"){
    const autor= await req.json()
    if(!autor.nombre||!autor.fechaNacimiento||!autor.nacionalidad||!autor.escritos){
        return new Response("BAD RQUEST",{status:400})
    }
    const { modifiedCount } = await coleccionautores.updateOne(
      { nombre: autor.nombre},
      { $set: { nombre: autor.nombre, fechaNacimiento:autor.fechaNacimiento,nacionalidad:autor.nacionalidad, escritos: autor.escritos } }
    );
    return new Response("usuario modificado")
    }
    if(path=="/books"){
      const book=await req.json()
      if(!book.titulo||!book.categoria||!book.fechaPublicacion){
        return new Response("BAD RQUEST",{status:400})
      }
      const {modifiedCount}=await coleccionlibros.updateOne(
        {titulo:book.titulo},
        {$set:{titulo:book.titulo,categoria:book.categoria,fechaPublicacion:book.fechaPublicacion}}
      );
      return new Response("libro modificado")
    }
   
    
  }

  return new Response("metodo no encontrado")
}

Deno.serve({port:3000},handler)