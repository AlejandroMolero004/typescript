import type { Collection } from "mongodb";
import type { BookModel, User, UserModel } from "./types.ts";
import type { Book } from "./types.ts";

export const fromModelToUser=async(model:UserModel,booksCollection:Collection<BookModel>):Promise<User>=>{
    let books = await booksCollection.find({ _id: { $in: model.books } }).toArray();
    return {
        id: model._id!.toString(),
        name: model.name,
        email:model.email,
        age:model.age,
        books:books.map((b)=>({
            id:b._id.toString(),
            nombre: b.title,
            pages: b.pages
        })),
    };

};

export const fromModelToBook = (modelo:BookModel):Book=>({
    id: modelo._id!.toString(),
    nombre:modelo.title,
    pages:modelo.pages,
});
