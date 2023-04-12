const crearPersona=(nombre,apellido)=>({nombre,apellido});

const Aivan=crearPersona('Aivan','Towers');
console.log(Aivan);

function imprimerArgumentos(){
    console.log(arguments);
}

const imprimerArgumentos2=(edad,...args)=>{
    // console.log({edad,args});
    return args;
}

const[edad,casado,nombre,apellido1]=imprimerArgumentos2(98,true,'Deivid','Aydiosmio');
console.log({casado,nombre,apellido1});