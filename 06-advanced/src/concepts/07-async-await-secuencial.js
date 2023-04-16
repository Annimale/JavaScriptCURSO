
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncAwaitComponentSecuencial = async (element) => {

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    const [value1,value2,value3]=await Promise.all([// El promise.all espera hasta qeu cada una este resuelta pero todas se ejectuan a la vez 
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        
    ]);


    console.time('Start');

    element.innerHTML = `value1: ${value1}<br>
value2: ${value2}<br>
value3: ${value3}<br>`

console.timeEnd('Start');
}


const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});


const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);
});


const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
});