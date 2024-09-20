// tienda con objetos y un carrito con obhetos y cantidad 3 objetos y un carrito

type objeto={
    nombre:string,
    precio:number,
}

type carrito={
    item:objeto,
    qty:number,
}

type Cart = Array<carrito>;
const pantalon:objeto={
    nombre:"pantalon",
    precio:12
}
const camisa:objeto={
    nombre:"camisa",
    precio:2
}
/*const micarrito:carrito=[

    {
        objeto:{...pantalon},
        qty:2
    },
    {item:{...camisa},qty: 1}
    
]*/
    

pantalon.precio=25
camisa.precio=15


