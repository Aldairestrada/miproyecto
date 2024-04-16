import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* 
const webSocket = require('ws');
const wss = new webSocket.Server({PORT:8087});
wss.on('connection', (ws)=>{
  console.log("un nuevo usuario conectado");
  ws.on('message', (data)=>{
    console.log(`mensaje:${data}`);
 wss.clients.forEach((cliente)=>{
  if(cliente != ws &&
    cliente.readyState === webSocket.OPEN){
      cliente.send(data);
    }
 });
  });
  ws.on('close',()=>{
    console.log('usuario desconectado');
  });
});
console.log('server funcionando');
*/
