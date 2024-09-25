// TIPOS DE REALIZAR FUNCIONES

// Functuin type expressions

    // (a:string)=> void una funcion con un parametro string llamado a no tiene retorno
    // y luego dentro llama a la funcion que recibe como parametro
    // ESTRUCTURA: function nombrefuncion(variable:indicas que es una funcion que recibe un string y devuelve void con el =>)

    // named function
    /*
    function greeter(fn:(a:string)=> void){
       fn("hello world")
    }

    function print(s:string):void{
    console.log("hello")
    }
    */
    //greeter(print)

    // ------------------------------------------------------- //

    //we can use a type alias to name a function type:

    // arrow function 
    /*
    type greatfuncion = (a:number)=>void
    function f(fn:greatfuncion){
        console.log("hola")
    }*/

    // arrow function

    /*
    let migreatfunction:greatfuncion= (a:number):void =>{
        console.log(a)
    }
    f(migreatfunction)
    
    type funcionstring = (a:string)=>string
    function funnum(fn:funcionstring){
        console.log("he recibido una funcion del tipo funcionstring")
    }
    let mifunnum:funcionstring=(a:string):string=>{
        return "devuelvo string"
    }
    funnum(mifunnum)
    */

    const getaction=(s:string)=>{
        if(s==="suma") return (a:number,b:number)=>a+b
        if(s==="resta") return (a:number,b:number)=>a-b
        if(s==="multiplicacion") return (a:number,b:number)=>a*b
        if(s==="division")return (a:number,b:number)=>{
            if(b===0){
                console.error("Error: No se puede dividir por cero.");
                return NaN 
            }
            return a/b   
        }
    }
    /*
    const op=getaction("suma")
    if(op){
        console.log(op(5,2)) 
    }
    else{
        console.log("error")
    }

    const op2=getaction("resta")
    if(op2)
    console.log(op2(3,2))
    
    const op3=getaction("multiplicacion")
    if(op3)
    console.log(op3(3,2))

    const op4=getaction("division")
    if(op4)
    console.log(op4(4,0))
    */

    const operacion=(f,a,b)=>f(a,b)
    const div=(a,b)=>a/b
    console.log(operacion(div,4,2))




    



