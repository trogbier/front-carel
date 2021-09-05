import React, {useState} from 'react';
import './App.css'
import TablePages from "./pages/TablePages";
import 'materialize-css'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import GrafPages from "./pages/GrafPages";
import {ContextData} from './context/ContextData'


const App = () => {

    let [expect, setExpect] = useState([{title: 33852910313}, {title: 33852910313}, {title: 33852910313}, {title: 33852910313},
        {title: 33852910313}, {title: 33852910313}, {title: 33852910313}, {title: 33852910313}, {title: 33852910313}, {title: 33852910313}, {title: 33852910313}])
    const fact = [31850910313, 35935356067, 35395090715, 36462680559.25, 34117735931.87, 34801533070.60, 39323606617.18, 41108607816.91, 54378039681.2, 58543527525.81, 68182687573.07]
    const countYear = expect.length < fact.length ? fact : expect
    const [change,setChange] = useState(true)
    let [dataInfo, setDataInfo] = useState(
        {
            0: [{title: 11245}, {title: 21}, {title: 31}, {title: 312},
                {title: 423}, {title: 123}, {title: 544}, {title: 123}, {title: 123}],
            1: [{title: 15}, {title: 21}, {title: 31}, {title: 312},
                {title: 423}, {title: 235}, {title: 544}, {title: 123}, {title: 123}],
            2: [{title: 15}, {title: 21}, {title: 31}, {title: 312},
                {title: 423}, {title: 123}, {title: 544}, {title: 123}, {title: 123}],
            3: [{title: 15}, {title: 21}, {title: 31}, {title: 312},
                {title: 423}, {title: 123}, {title: 544}, {title: 1312},
                {title: 123}],
            4: [{title: 15}, {title: 21}, {title: 31}, {title: 312},
                {title: 423}, {title: 123}, {title: 544}, {title: 123},
                {title: 123}],
            5: [{title: 123}, {title: 21}, {title: 31}, {title: 312},
                {title: 423}, {title: 123}, {title: 544}, {title: 123},
                {title: 3123}],
            6: [{title: 15}, {title: 21}, {title: 31}, {title: 312},
                {title: 245}, {title: 123}, {title: 544}, {title: 123},
                {title: 123}],
            7: [{title: 15}, {title: 21}, {title: 31}, {title: 312},
                {title: 423}, {title: 123}, {title: 544}, {title: 123},
                {title: 123}],
            8: [{title: 15}, {title: 2123}, {title: 31}, {title: 312},
                {title: 423}, {title: 123}, {title: 544}, {title: 123},
                {title: 123}],
            9: [{title: 15}, {title: 21}, {title: 31}, {title: 31123},
                {title: 423}, {title: 123}, {title: 544}, {title: 123},
                {title: 123}],
            10: [{title: 15}, {title: 21}, {title: 31}, {title: 312},
                {title: 423}, {title: 123}, {title: 544}, {title: 123},
                {title: 123}],
            11: [{title: 15}, {title: 21}, {title: 123}, {title: 312},
                {title: 423}, {title: 123}, {title: 544}, {title: 123},
                {title: 123}],
            12: [{title: 15}, {title: 25}, {title: 31}, {title: 312},
                {title: 423}, {title: 123}, {title: 544}, {title: 123},
                {title: 123}],
            13: [{title: 15}, {title: 21}, {title: 31}, {title: 312},
                {title: 124124}, {title: 123}, {title: 544}, {title: 123},
                {title: 123}]

        }
    )

    return (
        <ContextData.Provider value={{expect, fact, countYear, setExpect,change,setChange,dataInfo, setDataInfo}}>
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