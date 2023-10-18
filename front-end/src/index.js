import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from "./redux/store/store.jsx";
import { setLogIn } from './redux/profileTokenSlice';

function LocalStorageSet() {
    const token = localStorage.getItem("token");
    if (token) {
        store.dispatch(setLogIn({ token: token }));
    }
}
LocalStorageSet()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
