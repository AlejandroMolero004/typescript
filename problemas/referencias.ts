/*
type persona={
    name:string
    direccion:{
        ciudad:string;
        calle:string;
    }
}

let alex:persona={
    name:"Alex",
    direccion:{
        ciudad:"madrid",
        calle:"gran via"
    }
}

let julio:persona={
    name:"julio",
    direccion:{
        ...alex.direccion
    }
}


console.log(alex.name)
julio.name="julio"
console.log(julio.name)
console.log(alex.name)

julio.direccion.ciudad="Barcelona"
console.log(alex.direccion.ciudad)
console.log(julio.direccion.ciudad)

console.log("cambiamos la referencia de la direccion de julio")
julio.direccion={
    ciudad:"Asturias",
    calle:"Leopoldo alas"
}
console.log(alex.direccion.ciudad)
console.log(julio.direccion.ciudad)
*/

/*
const enemy = {
    scalar: "scalar",
    object: {name:"fantasma"},
    array:["fantasma"],
    method(){
        return "fantasma"
    }
}
//const reference=enemy
// ¿Se modificara en enemy y reference? Se cambia en los dos 
// porque la direccion de memoria de los dos apuntan al mismo sitio
// cambiemos lo que cambiemos se vera reflejado en los dos
// const clone={...enemy}
// los primitivos si que se van a copiar por lo que aqui solo se 
// veria modificado el el primitivo scalar lo demas serian referencias 


 
enemy.scalar="no scalar"
enemy.object.name="lobo"
enemy.array.push("lobo")

console.log(enemy)
//console.log(reference)
//console.log(clone)
//console.log(enemy.method())
//console.log(clone.method())

*/






/*
type persona={
    nombre:string
    trabajo:string
    amigos:persona[]
}
let alex:persona={
    nombre:"alex",
    trabajo:"policia",
    amigos: []
}
let juan: persona = {
    nombre: "Juan",
    trabajo: "profesor",
    amigos: []
};
let sofia: persona = {
    nombre: "Sofía",
    trabajo: "diseñadora",
    amigos: [juan]
};
let lucia: persona = {
    nombre: "Lucía",
    trabajo: "programadora",
    amigos: [alex, sofia]
};


let copiaalex=alex

alex.amigos.push(sofia)
alex.nombre="Roberto"
copiaalex.amigos.push(juan)
console.log(alex.nombre)
console.log(copiaalex.nombre)
console.log(alex.amigos[0].nombre)
console.log(copiaalex.amigos[0].nombre)



let copialexdiferente:persona={
    ...alex,
    amigos:[lucia]
}
alex.nombre="a"
console.log("nombres: /n")
console.log(alex.nombre)
console.log(copialexdiferente.nombre)
alex.amigos.push(lucia)
copialexdiferente.amigos.push(sofia)
console.log("amigos de alex: /n")
alex.amigos.forEach(e => {
    console.log(e.nombre)
});
console.log("/n")
console.log("amigos de copialexdiferente: /n")
copialexdiferente.amigos.forEach(e => {
    console.log(e.nombre)
});
*/

type Usuario = {
    id: number;
    nombre: string;
    edad: number;
    contactos:Usuario[]
};
let pablo:Usuario={
    id:1,
    nombre:"Pablo",
    edad:12,
    contactos:[]
};

let illojuan:Usuario = {
    id: 3,
    nombre: "Juan",
    edad: 18,
    contactos:[]
};
let vegeta:Usuario = {
    id: 3,
    nombre: "samuel",
    edad: 18,
    contactos:[]
};
const laura = {
    id: 6,
    nombre: "Laura",
    edad: 19,
    contactos: []
};

const andres = {
    id: 7,
    nombre: "Andrés",
    edad: 25,
    contactos: []
};
let copiapablo:Usuario={
    ...pablo,
    contactos:[]
}


pablo.contactos.push(illojuan)
pablo.contactos.push(laura)
copiapablo.contactos.push(vegeta)
copiapablo.contactos.push(andres)


//console.log(pablo.contactos)
//console.log(copiapablo.contactos)

/*
pablo.nombre="Jorge"
console.log(pablo.nombre)
console.log(pablo.contactos)
console.log(copiapablo.nombre)
console.log(copiapablo.contactos)
*/

copiapablo.contactos.pop();
console.log(pablo.nombre)
console.log(pablo.contactos)
console.log(copiapablo.nombre)
console.log(copiapablo.contactos)









