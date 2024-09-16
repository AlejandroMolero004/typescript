console.log("hola mundo")
function dividir(num:number,num2:number):number{
    let res:number
    if(num2===0){
        console.log("no se puede dividir por cero")
        res=0
    }
    else{
        res=num/num2
    }
    return res
}

console.log(dividir(4,0))

