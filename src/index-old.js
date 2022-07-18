import React from 'react';
import {StrictMode} from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';




// 👇️ IMPORTANT: div ID has to match with index.html
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);


//ReactDOM.render(
//  <BrowserRouter>
//    <App />
//  </BrowserRouter>,
//  document.getElementById('root'),
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//rviceWorker.unregister();
