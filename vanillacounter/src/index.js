import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counter from './reducers'

let store = createStore(counter);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
