
function saludar(nombre){
    console.log('Hola '+nombre);
    return 1;
}

saludar(Ivan);

const saludr=(tipodeperro) =>{
    console.log(tipodeperro)
}

saludr('bulldog');

function sumar(a,b,c,d){
    return a + b+ c+d;
}

const sumarFuncionFlecha=(a,b,c,d)=>{
    return a + b+ c+d;
}
const sumarEsIgualQueEstaFuncionFlecha=(a,b,c,d)=> a + b + c + d;

const getAleatorio=()=>Math.random;

console.log(sumar(1,2,3,4));
console.log(sumar2(8,3,2,1));
console.log(getAleatorio);