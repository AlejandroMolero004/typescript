/* some dice si en el array hay ALGUN elemento que cumple 
una condicion
recoorre elemento aplicando la funcion y
en EL MOMENTO EN EL QUE LA FUNCION SE CUMPLA SE PARA y devuelve un true
si ninguno cumple el criterio recorre todos y devuelve false
*/

const arrr=[1,2,3,4,5,6]
const pala=["hola","buenos dias","mañana","Mastodonte genio"]
const multiplotres=(n:number):boolean=>{
    console.log(n) /* 1 2 3 4 5 6 porque ninguno se cumple entonces nunca se para 
                    y musetra has el ultimo
                    */
    return n%7===0 // true
}
const mayordos=(n:number):boolean=>{
    console.log(n) /* 1 2 3  entoces 1 no lo cumple se muestra y pasa 2 tmp se muestra 3 se muestra y cumple
                      y se para y no muestra ninguno mas 
                    */
    return n>2 // true

}
const tamaniomayorcuatro=(p:string):boolean=>{
    console.log(p) //cuando se cumpla parara y el ultimo sera el que cumple el criterio
    return p.length >4
}
const hayunmultiplo=arrr.some(multiplotres) //1 2 3 4 5 6
console.log(hayunmultiplo) // false
console.log("")
const mayoresdos=arrr.some(mayordos) // 1 2 3
console.log(mayoresdos) //true
console.log("")
const palamabramayorcuatro=pala.some(tamaniomayorcuatro)// hola , buenos dias
console.log(palamabramayorcuatro) //true
