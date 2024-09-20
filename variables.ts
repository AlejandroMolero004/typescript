const a:number=3

type nota="aprobado" | "suspendido"
const aprobado:nota="aprobado"
const suspendido:nota="suspendido"

// definir un tippo
type persona={
    name:string
    friends:persona[]
}
const alex:persona={
    name:"Alex",
    friends:[]
}

