function comproprimo(num:number):boolean{
    let compro:boolean=false
    let contador:number=0
    for(let i=1;i<=num;i++){
        if(num%i===0){
            contador++
        }
    }
    if(contador==2){
        console.log("es primo")
        compro=true
    }
    else{
        console.log("no es primo")
    }
    return compro
}

console.log(comproprimo(3))