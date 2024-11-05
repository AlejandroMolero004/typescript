import type { Collection } from "mongodb";
import type{userModel,bookModel,user,Book}from "./types.ts" 

export const frommodeltouser=async(model:userModel,bookcollection:Collection<bookModel>):Promise<user>=>{
   const userbooks=await bookcollection.find({_id:{$in:model.books}}).toArray();
   return{
    id:model._id!.toString(),
    name:model.name,
    age:model.age,
    email:model.email,
    books:userbooks.map((b)=>frommodeltobook(b))
   }
}

export const frommodeltobook=(model:bookModel):Book=>{
    return{
        id:model._id!.toString(),
        title:model.title,
        pages:model.pages
    }
}