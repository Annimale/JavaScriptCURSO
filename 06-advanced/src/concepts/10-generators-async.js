
/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes";

export const generatorsAsync = async (element) => {

    const HeroGenerator = getHeroGenerator();
    let hasHeroes = false;

    do {
        const { value, done } = await HeroGenerator.next();
        hasHeroes = done;

        element.innerHTML = value;



    } while (!hasHeroes);





}
async function* getHeroGenerator() {

    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }

    return 'No hay mas putos heroes';

}




const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })

}