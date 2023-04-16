import { todo } from "../to-dos/models/to-do-model"


const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new todo('Piedra del alma'),
        new todo('Piedra del pillo'),
        new todo('Piedra del loes'),
    ],
    filter: Filters.All,
}


const initStore = () => {

    console.log(state);
    console.log('InitStore');
}
const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = (filter = Filters.All) => {

    switch (filter) {
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter(todo => todo.done === true);

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);



        default:
            throw new Error(`Option ${filter} is not valid`);
    }



}


/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new todo(description));
}
/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
   state.todos=state.todos.map(todo=>{

    if(todo.id===todoId){
        todo.done=!todo.done;
    }
    return todo;
   });
   
   
}

const deleteCompleted = (todoId) => {
    state.todos = state.todos.filter(todo => todo.done);
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}
/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter= newFilter
}

const getCurrentFilter = () => {
    return state.filter;
}











export default {
    addTodo,
    getTodos,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}