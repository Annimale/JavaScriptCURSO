alert('Hola, tienes que darle a aceptar para poder continuar y ejectuar la pagina');

let nombre= prompt('¿Como te llamas?', 'Lo que escriba aqui se escribirá automaticamente');

console.log('**'+nombre+'***');

const seleccion=confirm('¿Estas seguro?');
console.log(seleccion);

//Alert, prompt y confirm son metodos del objeto window. Window es solo propio del navegador web.
