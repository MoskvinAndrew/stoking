import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

import {store} from './store';
import 'styles/main.scss'
import {Root} from "modules/index";

const entryBlock = document.getElementById('root');
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    </Provider>
);
//const renderFunction: ReactDOM.Renderer = entryBlock.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;
const renderFunction: ReactDOM.Renderer = ReactDOM.render;
renderFunction(app, entryBlock);

//@ts-ignore
//store.subscribe(renderFunction);

serviceWorker.unregister();
reportWebVitals();