import{MongoClient}from "mongodb"
import { gameModel,userModel } from "./types.ts"
import {fromModeltoGame, fromModeltoUser} from "./utilities.ts"
const url="mongodb+srv://alexmoleroovejero:alexmoleroovejero@clustervideo.k5xfq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterVideo"

const client =new MongoClient(url)

const dbname= "game"

await client.connect();
console.log("conectado");

const db=client.db(dbname);


const gamesCollection = db.collection<gameModel>("games");
const usersCollection = db.collection<userModel>("users");



const handler=async (req:Request):Promise<Response>=>{
  const method = req.method;
  const url = new URL(req.url);
  const path = url.pathname;

  if(method==="GET"){
    console.log("metodo get")
    if(path==="/users"){
      const nombre=url.searchParams.get("nombre")
      let userDB:userModel[]=[]
      if(nombre){
        console.log("hola")
        userDB=await usersCollection.find({nombre}).toArray()
        const users= await Promise.all(userDB.map(async (u)=> await fromModeltoUser(u,gamesCollection)))
        console.log("adios")
        return new Response(JSON.stringify(users))
      }
    }
   if(path==="/games"){
      const nombre=url.searchParams.get("nombre")
      let gameDB:gameModel[]=[]
      if(nombre){
        gameDB=await gamesCollection.find({nombre:nombre}).toArray()
        const game= await Promise.all(gameDB.map((u)=>fromModeltoGame(u)))
        return new Response(JSON.stringify(game))
      }
      else{
        gameDB=await gamesCollection.find().toArray()
        const users= await Promise.all(gameDB.map(async (u)=> await fromModeltoGame(u)))
        return new Response(JSON.stringify(users)) 
      }
   }
  }
  else if(method==="DELETE"){
    console.log("metodo delete")
    if(path==="/users"){
      const nombre=url.searchParams.get("nombre")
      if(nombre){
        await usersCollection.deleteOne({nombre:nombre})
      }
      
    }
  }
  return new Response("metodo no encontrado")
}

Deno.serve({ port: 3000 }, handler);
