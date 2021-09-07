import React, {useContext} from 'react';
import {ContexData} from "../context/ContextData";
import Switches from "./Switches";

const Table = () => {
    const {expect, fact, countYear, setExpect,change} = useContext(ContexData)

    const Rename = (e, id) => {
        e.preventDefault()
        const newData = expect[id].title = +e.target.value
        setExpect([...expect], newData)
    }
    return (

    <div style={{marginBottom: 100, marginTop: 50}}>
        <div style={{display:'flex'}}>
            <Switches/>
            <h4 className={'center'} style={{marginRight:50,marginLeft:460}}>Прогноз бюджета</h4>
        </div>


            <table className="highlight">
                <thead>
                <tr>
                    <th/>
                    {countYear.map((year, id) => {
                        return <th key={id}>{id + 2010}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Прогноз</th>
                    {expect.map((expect, id) => {
                        return <td key={id}><input
                            style={{
                                cursor:'pointer',
                                borderBottom: 'none', height: '100%', margin: 0,
                                color: 'rgba(0,0,0,0.87)',
                                borderColor: 'rgba(118, 118, 118, 0.3)'
                            }}
                            type="number"
                            defaultValue={expect.title}
                            onChange={event => Rename(event, id)}
                            disabled={change}
                        /></td>
                    })}
                </tr>
                <tr>
                    <th>Фактически</th>
                    {fact.map((fact, id) => {
                        return <td key={id}>{fact}</td>
                    })}
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;