import React from 'react';
import './assets/js/index.js';
import './assets/style/global.css'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const App = () => (<h1 style={{textAlign: 'center'}}>支撑平台移动端</h1>)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
