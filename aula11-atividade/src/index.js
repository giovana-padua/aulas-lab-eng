import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Relogio from './Relogio'
import Letreiro from './Letreiro'
import reportWebVitals from './reportWebVitals';

const text = 'Venha estudar na Fatec'
let i = 0

const root = ReactDOM.createRoot(document.getElementById('root'));

function render() {
  let now = new Date().toLocaleTimeString()

  root.render(
    <React.StrictMode>
      <App />
      <Relogio agora={now}/>
      <Letreiro texto={text} indice={i}/>
    </React.StrictMode>
  );
  
  i++
}

setInterval(render, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
