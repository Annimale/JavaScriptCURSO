
/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

export const callbacksComponent = (element) => {


    const id = '5d86371f9f80b591f499df32';
    const id2 = '5d86371f2343e37870b91ef1';
    const id3 = '5d86371f233c9f2425f16916';

    
    
    findHero(id, (error,cualquierNombre1)=>{
       
       
        if (error){ 
            element.innerHTML=error;
            return;
        }
        findHero(id2,(error,nombreHeroe2)=>{
            if (error){ 
                element.innerHTML=error;
                return;
            }
            element.innerHTML=`${cualquierNombre1.name} / ${nombreHeroe2.name}` ;

        })
       
        
        // element.innerHTML=cualquierNombre?.name || 'No hay heroe'; //con el interrogante lo que al fina de cualquierNombre lo que hacemos es si nos equivocamos en la id del heroe te popndrá undefined en lugar de darte error
        

    });




}
/**
 * 
 * @param {String} id 
 * @param {(error?: String,hero: Object)=>void} callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id);

    if(!hero){
        callback(`Hero with ID ${id} not found`);
        return;
    }
    callback(null,hero)
}