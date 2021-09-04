import React, {useState} from 'react';
import './App.css'
import TablePages from "./pages/TablePages";
import 'materialize-css'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import GrafPages from "./pages/GrafPages";
import {ContextData} from './context/ContextData'


const App = () => {

    let [expect, setExpect] = useState([{title:33852910313}, {title:33852910313}, {title:33852910313}, {title:33852910313}, {title:33852910313}, {title:33852910313}, {title:33852910313}, {title:33852910313}, {title:33852910313}, {title:33852910313}, {title:33852910313}])
    const fact = [31850910313, 35935356067, 35395090715, 36462680559.25, 34117735931.87, 34801533070.60, 39323606617.18, 41108607816.91, 54378039681.2, 58543527525.81, 68182687573.07]
    const b = expect.length < fact.length ? fact : expect

    return (
        <ContextData.Provider value={{expect, fact, b, setExpect}}>
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
        </ContextData.Provider>

    );
};

export default App;