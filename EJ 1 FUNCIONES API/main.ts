type personaje={
  id:number,
  name:string,
  age:number,
  domainExpansion:string
}
const characters = [
  {
    id: 1,
    name: "Yuji Itadori",
    age: 15,
    domainExpansion: "N/A (No known Domain Expansion)",
  },
  {
    id: 2,
    name: "Megumi Fushiguro",
    age: 15,
    domainExpansion: "Chimera Shadow Garden",
  },
  {
    id: 3,
    name: "Nobara Kugisaki",
    age: 16,
    domainExpansion: "N/A (No known Domain Expansion)",
  },
  {
    id: 4,
    name: "Satoru Gojo",
    age: 28,
    domainExpansion: "Unlimited Void",
  },
  {
    id: 5,
    name: "Sukuna",
    age: 20000,
    domainExpansion: "Malevolent Shrine",
  },
  {
    id: 6,
    name: "Maki Zenin",
    age: 17,
    domainExpansion: "N/A (No known Domain Expansion)",
  },
  {
    id: 7,
    name: "Toge Inumaki",
    age: 17,
    domainExpansion: "N/A (No known Domain Expansion)",
  },
  {
    id: 8,
    name: "Panda",
    age: 0,
    domainExpansion: "N/A (No known Domain Expansion)",
  },
  {
    id: 9,
    name: "Kento Nanami",
    age: 28,
    domainExpansion: "N/A (No known Domain Expansion)",
  },
  {
    id: 10,
    name: "Suguru Geto",
    age: 27,
    domainExpansion: "Unknown/Not shown",
  }
];

const handler=async (req:Request):Promise<Response>=>{
  const metodo=req.method
  const url=new URL(req.url)
  const path=url.pathname

  if(metodo=="GET"){
    if(path==="/personaje"){
      if(url.searchParams.get("name")){
        const nombre=url.searchParams.get("name")
        if(!nombre) return new Response("Personaje no encontrado",{status:404})
        const personaje=characters.find((p)=>p.name===nombre)
        if(!personaje){
        return new Response("Personaje no encontrado",{status:404})
        }
        return new Response(JSON.stringify(personaje))
      }
      else if(url.searchParams.get("domainExpansion")){
        const exapansion=url.searchParams.get("domainExpansion")
        if(!exapansion) return new Response("Expansion no encontrada",{status:404})
        const personaje=characters.find((p)=>p.domainExpansion===exapansion)
        if(!personaje) return new Response("Personaje no encontrado",{status:404})
        return new Response(JSON.stringify(personaje))  
      }
      else if(url.searchParams.get("age")){
        const edad=url.searchParams.get("age")
        if(!edad) return new Response("Personaje no encontrado",{status:404})
        const personaje=characters.filter((p)=>p.age.toString()==edad)
        if(personaje.length===0) return new Response("Personaje con esa edad no encontrado",{status:404})
        return new Response(JSON.stringify(personaje))
      }
      else{
        return new Response(JSON.stringify(characters))
      }
    }


    
  }
  return new Response("endpoint not found",{status:404})
}
Deno.serve({ port: 3000 }, handler);

