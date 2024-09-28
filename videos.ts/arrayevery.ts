/*every comprueba si TODOS cumplen el criterio que le pasas si es asi devuelve true
si no devuelve false*/
const arrevery=[1,2,3,4,5,6]
const arrevery2=[1,2,3,4,5,6,12]
const mendiez=(n:number):boolean=>{
    console.log(n) // 1 2 3 4 5 6 12
    return n<10
}
//console.log(arrevery.every(mendiez))//true
//console.log(arrevery2.every(mendiez))//false

//ej 1 comprobar que TODOS los subarray tienen el 3
const arrdearr=[
    [1,2,3],
    [3,4],
    [3,2,3,4],
    [2,5,4],
]
let igualtres=(n:number)=>n==3
let todoverdadero=(v:boolean)=>v==true
let subarraystienentres=arrdearr.map((p)=>p.some(igualtres)).every(todoverdadero)
//let resultado=subarraystienentres.every(todoverdadero)
//console.log(subarraystienentres)
if(subarraystienentres===true){
    console.log("Todos constienen el numero 3")
}
else{
    console.log("alguno no contiene el numero tres")
}
