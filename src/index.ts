console.log("diego")
let msg: String = "dd"
msg = "jeje";
let dpe: String = "diego"
console.log(typeof String)

function sayhi(msg: String){
    console.log(msg)

}

enum Time  {Evening = 'e'}

const x = Time.Evening;

type Client = {
    name: string,
    id: number,
    preferenced: boolean
}
let Diego: Client = {
    name: 'Diego',
    id: 10,
    preferenced: true
}

if(Diego.preferenced){
    console.log("Funciona")
}


function getName( cl: Client) : String{
    return cl.name
}

let age: number|never = Square(Diego.id)
console.log(age)
// arguments implementing trait union type 
function Square(n: number | string): number|never{
    if(typeof n === 'string' ){
        throw new Error("Entrada no valida");
    }else{
        return n*n
    }
}

// intersection type not interesting
