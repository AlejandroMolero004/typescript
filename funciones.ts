// TIPOS DE REALIZAR FUNCIONES

// Functuin type expressions

    // (a:string)=> void una funcion con un parametro string llamado a no tiene retorno
    // y luego dentro llama a la funcion que recibe como parametro
    // ESTRUCTURA: function nombrefuncion(variable:indicas que es una funcion que recibe un string y devuelve void con el =>)

    // named function
    function greeter(fn:(a:string)=> void){
       fn("hello world")
    }

    function print(s:string):void{
    console.log("hello")
    }
    //greeter(print)

    // ------------------------------------------------------- //

    //we can use a type alias to name a function type:

    // arrow function 
    type greatfuncion = (a:number)=>void
    function f(fn:greatfuncion){
        console.log("hola")
    }

    // arrow function
    let migreatfunction:greatfuncion= (a:number):void =>{
        console.log(a)
    }
    f(migreatfunction)
    
    /*type funcionstring = (a:string)=>string
    function funnum(fn:funcionstring){
        console.log("he recibido una funcion del tipo funcionstring")
    }
    let mifunnum:funcionstring=(a:string):string=>{
        return "devuelvo string"
    }
    funnum(mifunnum)*/




    



