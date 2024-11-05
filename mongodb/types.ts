import type { ObjectId } from "mongodb";

export type UserModel ={
    name: string;
    age: number;
    email: string;
    books: ObjectId[];
  };
  
  export type BookModel ={
    title: string;
    pages: number;
    _id:number;
  };
  
  export type User = {
    name: string;
    age: number;
    email: string;
    books: Book[];
  };
  export type Book = {
    id: string;
    title: string;
    pages: number;
  };