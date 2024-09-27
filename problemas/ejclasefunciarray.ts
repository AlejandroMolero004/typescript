// ej 1
let n:string[]=["alex","gonzalo","raul"]
let tomayusculas=(n:string)=>n.toUpperCase()
let m=n.map(tomayusculas)
//console.log(m)
// ej 2
let p:number[]=[3,4,68,2,33,22,56]
let par=(n:number):boolean=>n%2===0
let pp=p.filter(par)
//console.log(pp)
// ej 3
let tamaño=n.map((p:string)=>p.length)
//console.log(tamaño)
// ej 4 

let estudiante:Persona[]=[
    {name:"Alberto",edad:12},
    {name:"Alex",edad:15},
    {name:"Aan",edad:20}
]

let comproedad=(p:Persona)=>{return p.edad>=18}
let nombremayoredad=estudiante.filter(comproedad).map((p)=>p.name)
///let nombremayoredad=mayoredad.map((p)=>p.name)
console.log(nombremayoredad)