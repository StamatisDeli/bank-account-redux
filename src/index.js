import React from 'react';
import { store } from "./store"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = () => ReactDOM.render(<App />, document.getElementById("root"))

render()
store.subscribe(render) 

registerServiceWorker()
