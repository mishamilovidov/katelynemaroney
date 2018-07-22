import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './scenes';
import registerServiceWorker from './services/serviceworker/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
