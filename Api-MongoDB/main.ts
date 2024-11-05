import{MongoClient}from "mongodb"
import { fromModelToUser } from "./utilities.ts";
import { BookModel, type User, type UserModel } from "./types.ts";


//const MONGO_URL="mongodb+srv://alexmoleroovejero:alexmoleroovejero@clustervideo.k5xfq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterVideo"

const MONGO_URL = Deno.env.get("MONGO_URL");
if (!MONGO_URL) {
  console.error("MONGO_URL is not set");
  Deno.exit(1);
}
const client = new MongoClient(MONGO_URL);

const dbName = 'nebrijadb'
await client.connect();
const db = client.db(dbName);
const BooksCollection = db.collection<BookModel>('books');
const UserCollection=db.collection<UserModel>('users')


const handler = async(req:Request):Promise<Response>=>{
    const method = req.method;
    const url = new URL(req.url);
    const path = url.pathname;

    if(method==="GET"){
        if(path==="/users"){
          if(url.searchParams.get("name")){
           const name=url.searchParams.get("name")
           const userDB = await UserCollection.find({name}).toArray();
           const users= await Promise.all(userDB.map((u)=>fromModelToUser(u,BooksCollection)))
           return new Response(JSON.stringify(users));
          }
          else if(url.searchParams.get("age")){
            const age=url.searchParams.get("age")
            const userDB = await UserCollection.find({age:parseInt(age)}).toArray();
            const users = await Promise.all(userDB.map((i)=>fromModelToUser(i,BooksCollection)))
            return new Response(JSON.stringify(users))
          }
        }
    }

    return new Response(JSON.stringify([]));

    
}

Deno.serve({ port: 3000 }, handler);

