/* 
una api rest es un programa que tiene una serie de endpoints y que atiende a peticiones 
que le llegan a traves de la red atraves del protocolo http
*/

/*
  Endoint:
    -Ruta (www.miweb.com/usuarios) la ruta sera /usuarios
    -Metodo como hago la peticion ( PUT, GET , POST , DELETE )
    -Payload: contenido de la peticon 
*/

/*
GET->Pedir
PUT->Modificar
POST->Añadir
DELETE->Borrar
*/

// publicar endpoint escucharlos y dar una respuesta

 let users =[
  {
    name:"alex",
    correo:"alex@gmail.com",
    edad:12
  },
  {
    name:"arandao",
    correo:"cachorra@gmail.com",
    edad:22
  },
  {
    name:"robert",
    correo:"roberto@gmail.com",
    edad:22
  },
  {
    name:"dalto",
    correo:"robertito@gmail.com",
    edad:12
  },
  {
    name:"Juan",
    correo:"rodrigo@gmail.com",
    edad:27
  },
  {
    name:"rodrigo",
    correo:"rodriguito@gmail.com",
    edad:27
  },
  {
    name:"rodrigo",
    correo:"rodriguitoatm@gmail.com",
    edad:12
  }

 ]
 /*
  funcion handler que gestiona una peticion
    - Request contiene toda la informacion sobre la peticion que me llega
    - Y la funcion devolvera una respuesta (Response)
    - En una api reste siempre tienes que tener una funcion que gestiona la petcion
    y devuelve una respuesta

*/
 const handler=async(req:Request):Promise<Response>=>{
    const url=new URL(req.url)
    console.log("La url es: "+url.host)
    // con esto puedes saber desde que ruta se esta haciendo la llamada
    const path=url.pathname
    const searchparams=url.searchParams
    const method=req.method;

    if(method==="GET"){
      if(path==="/users"){
        if(searchparams.get("name")){
          const name=url.searchParams.get("name")
          if(!name)return new Response(JSON.stringify([]));
          const findusers=users.filter((u)=>u.name=== name);
          return new Response(JSON.stringify(findusers));
        }
        else if(searchparams.get("correo")){
          const email=url.searchParams.get("correo")
          if(!email)return new Response("Bad request",{status:404})
          const user=users.find((u)=>u.correo===email);
          if(user) return new Response(JSON.stringify(user))
          return new Response("User not found",{status:404})
        }
        else{
          return new Response(JSON.stringify(users))
        }
      }
    }
    else if (method === "POST") {
      if (path === "/users") {
        if(!req.body) return new Response("Bad Request",{status:400})//todo lo que lleve un payloas necesita esto
        const payload = await req.json();
        if (!payload.name || !payload.email || !payload.edad) {
          return new Response("Bad request", { status: 400 });
        }
        if (users.some((u) => u.correo === payload.email)) {
          return new Response("Duplicated", { status: 409 });
        }
        users.push({ name: payload.name, correo: payload.email,edad:payload.edad });
        return new Response(JSON.stringify(users));
      }
    }
    else if(method==="PUT"){
      if(path === "/users"){
        if(!req.body) return new Response("Bad Request",{status:400})//todo lo que lleve un payloas necesita esto
        const payload = await req.json();
        if(!payload.name || !payload.edad || !payload.email){
          return new Response("Bad request", { status: 400 });
        }
        const modificacion=users.find((p)=>p.correo===payload.email)
        if(!modificacion){
          return new Response("Not found",{status:404})
        }
        modificacion.name=payload.name
        modificacion.edad=payload.edad
        return new Response(JSON.stringify(users))
      }
    }
    else if(method=="DELETE"){
      if(path==="/users"){
        if(!req.body) return new Response("Bad Request",{status:400})//todo lo que lleve un payloas necesita esto
        const payload=await req.json();
        if(!payload.email){
          return new Response("Bad request", { status: 400 });
        }
        users=users.filter((u)=>u.correo!=payload.email)
        return new Response(JSON.stringify(users))
      }
    }
    return new Response("endpoint not found",{status:404})
  }
    
    /*
    if(path==="/users"){
      if(searchparams.get("name") && searchparams.get("edad")){
          const name=searchparams.get("name")
          const edad=searchparams.get("edad")

          const result=users.filter(
            (elem)=>elem.name===name && elem.edad.toString()===edad
          )

          return new Response(JSON.stringify(result))
      }
      if(searchparams.get("name")){
        const name=searchparams.get("name")
        const u=users.filter(elem=>elem.name===name)
        return new Response(JSON.stringify(u))
      }
      else if(searchparams.get("edad")){
        const edad=searchparams.get("edad")
        const e=users.filter(elem=>elem.edad.toString()===edad)
        return new Response(JSON.stringify(e))
      }
      //las respuestas siempre deben de ser texto
      //return new Response ("estas llamndo a /users")
      return new Response(JSON.stringify(users))
    }
    else if(path==="/dates"){
      return new Response ("estas llamando a /dates")
    }
    return new Response (`la ruta ${path} no exsiste`,{status:404})
 }
    */

 /*
  tu programa de deno esta escuchando en el puerto 3000 y cada vez que le llegue una peticion
  la va a gestionar con la funcion handler
  Deno.serve({port:puerto de escucha},funcion para manejar la peticion) 
 */
 Deno.serve({port:3000},handler)