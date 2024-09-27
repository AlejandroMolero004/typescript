const numbers = [1, 222, 3, 4,22,0,1,111];
const suma=numbers.reduce((acumulador,elemento)=>acumulador+elemento,0)
const multiplicacion=numbers.reduce((acumulador,elemento)=>acumulador*elemento,1)
//console.log(suma)
//console.log(multiplicacion)

const words=["Hola ","me ","llamo ","Alex "]
const frase=words.reduce((acumulador,elemento)=>acumulador.concat(elemento),"")
//console.log(frase)

let mayor=(n1:number,n2:number)=>{
    let mayor=0
    if(n1>n2){mayor=n1}
    else{
        mayor=n2
    }
    return mayor
}
const maximo=numbers.reduce((acumulador,elemento)=>mayor(elemento,acumulador),0)
//console.log(maximo)

// Dado un array de valores, cuenta cuántas veces aparece cada valor en el array.

const fruta=['manzana', 'plátano', 'naranja', 'manzana', 'naranja', 'plátano', 'manzana']
const coches=["volvo","wolwagen","fiat","renault","volvo","fiat","fiat","renault"]
const count=fruta.reduce((acumulador,fruta)=>{
    acumulador[fruta]=(acumulador[fruta]||0)+1
    return acumulador
},{})
console.log(count)

