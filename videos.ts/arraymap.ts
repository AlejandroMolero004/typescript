
//map trasformar un array en otro puede recibir dos parametros el elemto y su indice
//pero el array de origen y el array final tienen que tener el mismo tamaño 

/*
const ARRAY=[1,2,3,4,5]
// la funcion map recibe una funcion t la palica sobrea cada elemento
const f=(n:number)=>2*n
const eldoble=ARRAY.map(f)
ARRAY.forEach((elem:number)=>{
    console.log(elem)
})
console.log(" ")
eldoble.forEach((elem:number)=>{
    console.log(elem)
})
//const eldoble=ARRAY.map((n:number)=>2*n)

*/
const Personas:Persona[]=[
    {name:"Alberto",edad:12},
    {name:"Alex",edad:15},
    {name:"Aan",edad:20}
]
//lo que haces aqui es que del array de persona vas a coger de las persona solo su nombre
const nombres=Personas.map((p)=>p.name)
nombres.forEach((n:string)=>{
    console.log(n)
})
