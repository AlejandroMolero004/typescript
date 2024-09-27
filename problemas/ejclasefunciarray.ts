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
type Persona={
    name:string,
    edad:number
}
let estudiante:Persona[]=[
    {name:"Alberto",edad:12},
    {name:"Enrique",edad:15},
    {name:"Maria",edad:20},
    {name:"Andrea",edad:21},
    {name:"Loredana",edad:15}
]

let comproedad=(p:Persona)=>{return p.edad>=18 && p.name.length>5}
let nombremayoredad=estudiante.filter(comproedad).map((p)=>p.name)
///let nombremayoredad=mayoredad.map((p)=>p.name)
//console.log(nombremayoredad)

let personaelegida=estudiante.find(comproedad)
//console.log(personaelegida)

let numerosmuchos=[1,13,4,22,5,6,111,321,45]

let acumulador=0
numerosmuchos.reduce((acc,curr)=>curr>acc?curr:acc,numerosmuchos[0])

// las palabras que tengan mas de cinco
let nombre:string[]=["Bob","Alejandro","Roberto","Alex","Bertran"]
const palabrasLargas = nombre.reduce((acc: string[], curr: string) => {
    if (curr.length > 5) {
        acc.push(curr);
    }
    return acc;
}, []); 