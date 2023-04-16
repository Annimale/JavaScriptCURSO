import './style.css'
import { App } from './src/to-dos/app';
import toDoStore from './src/store/to-do.store';


toDoStore.initStore();



App('#app');
