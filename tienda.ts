/*
EJ 1:
Tienes un array de objetos que representan productos de una tienda. 
Cada producto tiene las propiedades: nombre, precio, y disponible.
 Necesitas realizar las siguientes operaciones:

Filtrar los productos que están disponibles (disponible: true).
Obtener un array con los nombres de los productos filtrados y su precio, 
en formato: "Producto: [nombre], Precio: [precio]".
*/

type objeto={
    nombre:string,
    precio:number,
    disponible:boolean
}
let inventario:objeto[]=[
    { nombre: "Teléfono", precio: 800, disponible: true },
    { nombre: "Tablet", precio: 500, disponible: false },
    { nombre: "Cámara", precio: 1200, disponible: true },
    { nombre: "Televisor", precio: 1500, disponible: false },
    { nombre: "Consola de videojuegos", precio: 400, disponible: true },
    { nombre: "Altavoces", precio: 250, disponible: true },
    { nombre: "Smartwatch", precio: 350, disponible: false }
]
let disponibles=inventario.filter(objeto=>objeto.disponible);
//console.log(disponibles)

let nombreprecio=disponibles.map(objeto=>`Producto: ${objeto.nombre}, Precio: ${objeto.precio}`)
//console.log(nombreprecio)

/*
EJ 2:
Tienes un array de objetos que representan libros en una librería.
Cada libro tiene las propiedades título, autor, añoPublicacion y disponible. 
Necesitas realizar las siguientes operaciones:

Filtrar los libros que fueron publicados después del año 2000 y están disponibles.
Crear un array con los títulos de los libros filtrados, pero en mayúsculas.
*/

type libro={
    titulo:string,
    autor:string,
    añoPublicacion:Date,
    disponible:boolean
}
let fl=(l:libro)=>(l.añoPublicacion.getFullYear()>2000 && l.disponible==true)

let almacenlibros:libro[]=[
      { 
        titulo: "El código Da Vinci", 
        autor: "Dan Brown", 
        añoPublicacion: new Date(2003, 3, 18),  // 18 de Abril de 2003
        disponible: true 
      },
      { 
        titulo: "Cien años de soledad", 
        autor: "Gabriel García Márquez", 
        añoPublicacion: new Date(1967, 5, 30),  // 30 de Junio de 1967
        disponible: false 
      },
      { 
        titulo: "Sapiens", 
        autor: "Yuval Noah Harari", 
        añoPublicacion: new Date(2011, 8, 4),  // 4 de Septiembre de 2011
        disponible: true 
      },
      { 
        titulo: "Harry Potter y la piedra filosofal", 
        autor: "J.K. Rowling", 
        añoPublicacion: new Date(1997, 5, 26),  // 26 de Junio de 1997
        disponible: true 
      },
      { 
        titulo: "El señor de los anillos", 
        autor: "J.R.R. Tolkien", 
        añoPublicacion: new Date(1954, 6, 29),  // 29 de Julio de 1954
        disponible: false 
      },
      { 
        titulo: "El nombre del viento", 
        autor: "Patrick Rothfuss", 
        añoPublicacion: new Date(2007, 2, 27),  // 27 de Marzo de 2007
        disponible: true 
      },
      { 
        titulo: "Los juegos del hambre", 
        autor: "Suzanne Collins", 
        añoPublicacion: new Date(2008, 8, 14),  // 14 de Septiembre de 2008
        disponible: true 
      }
]
let aux=almacenlibros.filter(fl)
//console.log(aux)

let mayusculas=(l:libro):string=>(l.titulo.toUpperCase())
let arrmayusculas=almacenlibros.map(mayusculas)
console.log(arrmayusculas)
