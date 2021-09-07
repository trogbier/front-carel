import React from 'react';
import './App.css'
import TablePages from "./pages/TablePages";
import 'materialize-css'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import GrafPages from "./pages/GrafPages";
import ContextProvider from "./context/ContextData";


const App = () => {
    return (
        <ContextProvider>
            <BrowserRouter>
                <Nav/>
                <Switch>
                    <Route path={'/'} exact>
                        <GrafPages/>
                    </Route>
                    <Route path={'/table'}>
                        <TablePages/>
                    </Route>
                    <Redirect to={'/'}/>
                </Switch>
            </BrowserRouter>
        </ContextProvider>

    );
};

export default App;