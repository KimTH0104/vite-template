import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'cross-fetch/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import elements from './routes.tsx';
import SessionStorage from "./util/SessionStorage";
import UserSession from "./util/UserSession";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Routes} from "react-router-dom";
import {Provider} from "jotai";
import {ToolLayout} from "./container/toollayout";
import {createRoot} from "react-dom/client";

console.log("elements :" ,elements)

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider>
            <React.Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    {elements}
                </BrowserRouter>
            </React.Suspense>
        </Provider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
