import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import routeReducer from './store/reducers/route';
import anupReducer from './store/reducers/anup';
import userReducer from './store/reducers/user';
import imageUrlReducer from './store/reducers/imageUrl';
import inputReducer from './store/reducers/input';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';


import * as serviceWorker from './serviceWorker';

// const rootReducers = combineReducers({
//     routeReducer: routeReducer,
//     anupReducer: anupReducer,
//     userReducer: userReducer,
//     imageUrlReducer: imageUrlReducer,
//     inputReducer: inputReducer
// })

// const logger = store => {
//     return next => {
//         return action => {
//             console.log('[Middleware] dispatching',action)
//             const result = next(action)
//             console.log('[Middleware] next state',store.getState())
//             return result
//         }
//     }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducers,composeEnhancers(applyMiddleware(logger)))

ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>    
    ,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
