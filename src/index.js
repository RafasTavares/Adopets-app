import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StepsComponent from './components/steps';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StepsComponent />, document.getElementById('root'));
registerServiceWorker();
