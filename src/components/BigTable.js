import React, {useContext} from 'react';
import {ContextData} from "../context/ContextData";


const Table = () => {
    const {fact, b} = useContext(ContextData)
    return (
        <div style={{marginBottom: 100, marginTop: 50}}>

            <table className="highlight">
                <thead>
                <tr>
                    <th/>
                    {b.map((data, index) => {
                        return <th key={index}>{index + 2010}</th>
                    })}
                </tr>
                </thead>

                <tbody>
                <tr>
                    <th>Индекс потребительских цен (ИНФЛЯЦИЯ)
                    </th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Валовой региональный продукт в сопоставимых ценах</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Индекс промышленного производства (С+D+E)</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Продукция сельского хозяйства во всех категориях хозяйств</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Инвестиции в основной капитал за счет всех источников финансирования</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Оборот розничной торговли</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Объем платных услуг населению</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Реальные располагаемые денежные доходы населения</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Внешнеторговый оборот темпы роста</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Уровень зарегистрированной безработицы</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Численность постоянного населения</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Темпы роста - Экспорт</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                <tr>
                    <th>Темпы роста -Импорт</th>
                    {fact.map(fact => {
                        return <td>{fact}</td>
                    })}
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;