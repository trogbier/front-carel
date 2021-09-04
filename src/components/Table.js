import React, {useContext} from 'react';
import {ContextData} from "../context/ContextData";

const Table = () => {
    const {expect, fact, b} = useContext(ContextData)

    return (
        <div style={{marginBottom: 100, marginTop: 50}}>

            <table className="highlight">
                <thead>
                <tr>
                    <th/>
                    {b.map((year, id) => {
                        return <th key={id}>{id + 2010}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Прогноз</th>
                    {expect.map((expect, id) => {
                        return <td key={id}>{expect}</td>
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