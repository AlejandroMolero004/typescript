const numeros: number[] = [1, 2, 3, 4, 5, 6];
let multi=(n:number)=>{
    if(n%2===0){
        return n*2
    }
    else{
        return n*3
    }
}
let newnumeros=numeros.map(multi)
//console.log(newnumeros)

type Estudiante={
    nombre:string,
    nota:number
}
const estudiantes: Estudiante[] = [

    { nombre: "Alice", nota: 85 },
 
    { nombre: "Bob", nota: 70 },
 
    { nombre: "Charlie", nota: 40 },
 
    { nombre: "David", nota: 40 },
 
];
let mascincuenta=(e:Estudiante)=>{
    if(e.nota>50){
        return true
    }
    else{
        return false
    }
}
let estudiantesmasdecincuenta=estudiantes.every(mascincuenta)
//console.log(estudiantesmasdecincuenta)

const num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumatotal=num.reduce((acc:number,curr:number)=>{
    acc=acc+curr
    return acc
},0)
//console.log(sumatotal)

let espar=(num:number)=>{
    if(num%2===0){
        return true
    }
    else{
        return false
    }
}
let pares=num.filter(espar)
//console.log(pares)

let masigualsesenta=(e:Estudiante)=>{
    if(e.nota>=60){
        return true
    }
    else{
        return false
    }
}
let estudiantesmasdese=estudiantes.filter(masigualsesenta)
//console.log(estudiantesmasdese)

let estudiantees:Estudiante[] = [

    { nombre: "Alicia", nota: 85 },
 
    { nombre: "Jose", nota: 70 },
 
    { nombre: "Carlos", nota: 92 },
 
    { nombre: "David", nota: 88 },
 
   ];
let menosdecincuenta=(e:Estudiante)=>{
    if(e.nota<50){
        return true
    }
    else{
        return false
    }
}
/*
if(estudiantees.every(menosdecincuenta)){
    console.log("hay uno")
}
else{
    console.log("no hay")
}
*/

const palabras: string[] = ["manzana", "bananaaaaaaaaaaaaaaaaaa", "fresa", "kiwi", "sandía"];
let palabramaslarga=(arr:string[])=>{
    let larga:string="hola"
    arr.forEach((elem:string)=>{
        if(elem.length>larga.length){
             larga=elem
        }
    })
    console.log(larga)
}
console.log(palabramaslarga(palabras))