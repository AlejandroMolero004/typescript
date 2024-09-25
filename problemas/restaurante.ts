type ingrediente={
    nombre:string
    cantidad:number
    vegano:boolean
}
type plato={
    ingredientes:ingrediente[]
    precio:number
    dispo:boolean
}
type pedido={
    plato:plato[]
    cantidad:number
    mesa:number
    cliente:string
}
type mesa={
    numero:number
    pedidos:pedido[]
    cuenta:number
}

function crearingrediente(nombre:string,cantidad:number,vegano:boolean):ingrediente{
    let ingrediente:ingrediente={
        nombre:nombre,
        cantidad:cantidad,
        vegano:vegano
    }
    return ingrediente
}
function crearlista(ingrediente:ingrediente,lista:ingrediente[]):ingrediente[]{
    lista.push(ingrediente)
    return lista
}
function crearplato(lista:ingrediente[],precio:number,disponible:boolean):plato{
    let pl:plato={
        ingredientes:lista,
        precio:precio,
        dispo:disponible
    }
    return pl
}
function añadirplato(listaplatos:plato[],p:plato):plato[]{
    listaplatos.push(p)
    return listaplatos
}
function crearpedido(p:plato[],cantidad:number,m:number,cliente:string):pedido{
    let pedido:pedido={
        plato:p,
        cantidad:cantidad,
        mesa:m,
        cliente:cliente
    }
    return pedido
}

let carne=crearingrediente("carne",1,false)
let patatas=crearingrediente("patatas",3,true)
let listaingredientes:ingrediente[]=[]
listaingredientes=crearlista(carne,listaingredientes)
listaingredientes=crearlista(patatas,listaingredientes)
let plato1=crearplato(listaingredientes,12,true)
let plato2=crearplato(listaingredientes,12,true)
let plato3=crearplato(listaingredientes,12,true)

let listaplatos:plato[]=[]
listaplatos=añadirplato(listaplatos,plato1)
listaplatos=añadirplato(listaplatos,plato2)
listaplatos=añadirplato(listaplatos,plato3)

let pedido=crearpedido(listaplatos,1,13,"roberto")
//console.log(pedido.plato[0].ingredientes[0])
let num=1
console.log("El pedido contiene estos platos: \n")
pedido.plato.forEach(element => {
    console.log("plato"+num)
    element.ingredientes.forEach(element=>{
        console.log("ingredientes: "+element.nombre)
        console.log("cantidad: "+ element.cantidad)
        console.log("¿Es vegano?: "+element.vegano)
        
    })
    num++
    console.log("\n")

});
console.log(pedido.mesa)
console.log(pedido.cliente)
console.log(pedido.cantidad)








