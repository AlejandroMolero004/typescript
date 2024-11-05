import { ObjectId, type OptionalId } from "mongodb";

// objetos de mongo db
export type UserModel = OptionalId<{
    name: string;
    age: number;
    email: string;
    books: ObjectId[];
  }>;
  
  export type BookModel = OptionalId<{
    title: string;
    pages: number;
  }>;
  
  export type User = {
    id: string;
    name: string;
    age: number;
    email: string;
    books: Book[];
  };
  export type Book = {
    id: string;
    nombre: string;
    pages: number;
  };