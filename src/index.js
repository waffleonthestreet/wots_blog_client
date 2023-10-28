import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.js";
import {AuthProvider} from "./contexts/JWTContext.js";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persister} from "./store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        {/*<PersistGate loading={null} persistor={persister}>*/}
        <AuthProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AuthProvider>
        {/*</PersistGate>*/}
    </Provider>
);
