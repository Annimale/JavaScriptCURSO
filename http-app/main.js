import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { BreakingBadApp } from './src/breakingbad/breakingbad-app'

document.querySelector('#app').innerHTML = `
  <div>
   
    <h1 id ="app-title">Hello Vite!</h1>
    <div class="card">
    
    </div>
    
  </div>
`
const element= document.querySelector('.card');
BreakingBadApp(element);