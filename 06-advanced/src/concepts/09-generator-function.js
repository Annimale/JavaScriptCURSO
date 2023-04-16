
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorFunction = (element) => {

    const myGenerator = myFirstGeneratorFunction();

    const genId= idGenerator();

    const button = document.createElement('button');
    button.innerText='Click me';
    element.append(button);

    const renderButton = ()=>{
        const{value}=genId.next();

        button.innerText= `Click ${value}`;
    }

button.addEventListener('click', renderButton);

}

function* idGenerator(){
let currentId=0;
while(true){
    yield ++currentId;
}



}





function* myFirstGeneratorFunction() {


    yield 'Mi primer valor';
    yield 'Mi segundo valor';
    yield 'Mi tercer valor';
    yield 'Mi caurto valor';

    return 'No hay valores';// El return marca el final
    return 'ya no puedo hacer nada';

}