import type { Collection } from "mongodb";
import type { game, gameModel, user, userModel } from "./types.ts";

 export const fromModeltoUser=async(umodel:userModel,gamecollection:Collection<gameModel>):Promise<user>=>{
    console.log("estoy en la funcion")
    console.log(umodel)
    const games= await gamecollection.find({_id:{$in:umodel.juegos}}).toArray();
    console.log(games)
    return{
    id:umodel._id!.toString(),
    nombre:umodel.nombre,
    juegos:games.map((g)=>({
        id:g._id.toString(),
        nombre:g.nombre,
        precio:g.precio
    })),
    }
}

export const fromModeltoGame=(model:gameModel):game=>({
   id:model._id.toString(),
   nombre:model.nombre,
   precio:model.precio
});
