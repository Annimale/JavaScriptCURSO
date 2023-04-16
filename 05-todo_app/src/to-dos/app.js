import toDoStore from '../store/to-do.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';



 const elementIds={
    todoList: '.todo-list',
 }
/**
 * 
 * @param {String} elementId elemento donde renderizo la app 
 */
export const App =(elementId)=>{
const displayTodos =()=>{
    const todos = toDoStore.getTodos( toDoStore.getCurrentFilter());
    renderTodos(elementIds.todoList, todos);
}
    //Cuando llamamos a la app
    (()=>{
        const app= document.createElement('div');
        app.innerHTML= html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();



}