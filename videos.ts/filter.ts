//filter lo que hace es quedarse con algunos elementos de un array
//recibira una funcion que sera el criterio de filtrado
const a=[1,2,3,4,5,6,7]
// nos queremos quedar con los elementos que son mayores que 3
const mayortres=(a:number)=>a>3
//recorre todos los elementos y si el resultado es true pasa al otro array
//const b=a.filter(mayortres)
const b=a.filter((a:number)=>a>3)
const c=a.filter((a:number)=>a%2===0)
/*
b.forEach((n:number)=>{
    console.log(n)
})
*/
/*
c.forEach((n:number)=>{
    console.log(n)
})
*/


//partiendo de un array de estudiantes 
type student={
    name:string;
    mark:number;
}
const estudiantes=[
    {name:"Alex",mark:5},
    {name:"Carlos",mark:2},
    {name:"Izan",mark:9},
    {name:"Pablo",mark:10},
    {name:"Gonazlo",mark:3},
]
const combrobarnota=(s:student)=>{
    if(s.mark>=5){
        return true
    }
    else{
        return false
    }
}
const getnombre=(s:student):string=>{
    let n=s.name
    return n
}
const aprobados=estudiantes.filter(combrobarnota)
/*
aprobados.forEach((p:student)=>{
    console.log(p.name)
})*/
// una vez filtrados para luego quedarte con una caracteristica de las  personas
// utilizas el .map() que transforma una array de estudiantes en una array de strings
const nombreaprobados=aprobados.map((p)=>p.name)
nombreaprobados.forEach((n:string)=>{
    console.log(n)
})



