// ej 1
let n:string[]=["alex","gonzalo","alex","raul"]
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

let numerosmuchos=[10, 5, 20, 40, 15]

let acumulador=0
numerosmuchos.reduce((acc,curr)=>curr>acc?curr:acc,numerosmuchos[0])

// las palabras que tengan mas de cinco
let nombre:string[]=["Bob","Alejandro","Roberto","Alejandro","Roberto"]
const palabrasLargas = nombre.reduce((acc: string[], curr: string) => {
    if (curr.length > 5) {
        acc.push(curr);
    }
    return acc;
}, []); 
//console.log(palabrasLargas)

// sumar todos los numeros de un array
let sumaarray=numerosmuchos.reduce((acc,valoractual)=>{
    return acc+valoractual
},0)
//console.log(sumaarray)

let repetidoalex=n.reduce((acc,valoract)=>{
    if(valoract==="alex"){
       return acc+=1
    }
    return acc
   
},0)
//console.log(repetidoalex)

let numeropares=numerosmuchos.reduce((acc,valoractual)=>{
    if(valoractual%2===0){
        acc+=1
        return acc
    }
    return acc
},0)
//console.log(numeropares)

let nummaximo=numerosmuchos.reduce((acc,valoractual)=>{
    if(valoractual>acc){
        //acc=valoractual
        return valoractual
    }
    return acc
},0)
//console.log(nummaximo)

//Dado un array de arrays, usa reduce para aplanarlo en un solo array.
const arrayDeArrays = [[1, 2], [3, 4], [5, 6]];
let arrayunico = arrayDeArrays.reduce((acc,valoractual)=>{
   return acc.concat(valoractual)
},[])
//console.log(arrayunico)

//Dado un array con elementos repetidos, usa reduce para contar cuántas veces aparece cada elemento.
let numapacadanomb=nombre.reduce((acc,valoractual)=>{
   if(acc[valoractual]){
    acc[valoractual]+=1
   }
   else{
    acc[valoractual]=1
   }
   return acc
},{})

//console.log(numapacadanomb)

//