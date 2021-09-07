import React, {useContext, useState} from 'react';
import {ContexData} from "../context/ContextData";
import LineTable from "./LineTable";


const Table = () => {
    const [isOpen, setIsOpen] = useState([{title: '', data: false, id: null}])
    const {change, dataInfo, setDataInfo} = useContext(ContexData)
    const title = ['Индекс потребительских цен (ИНФЛЯЦИЯ)', 'Валовой региональный продукт в сопоставимых ценах', 'Индекс промышленного производства (С+D+E)',
        'Продукция сельского хозяйства во всех категориях хозяйств', 'Инвестиции в основной капитал за счет всех источников финансирования', 'Оборот розничной торговли',
        'Объем платных услуг населению', 'Реальные располагаемые денежные доходы населения', 'Внешнеторговый оборот темпы роста', 'Уровень зарегистрированной безработицы',
        'Численность постоянного населения', 'Темпы роста - Экспорт', 'Темпы роста -Импорт']
    const Rename = (e, id, index) => {
        e.preventDefault()
        const newData = dataInfo[index][id].title = +e.target.value
        const copy = JSON.parse(JSON.stringify(dataInfo))
        setDataInfo(copy, newData)
    }
    const clickHandler = (e, id) => {
        setIsOpen({title: `${e.target.innerText}`, data: true, id: id})
    }
    return (
        <div style={{marginBottom: 100, marginTop: 50}}>
            <div style={{display: "flex"}}>
                <p style={{marginTop: 30, marginLeft: 20, fontSize: 16, fontWeight: 'bolder'}}>Кликнете по
                    показателю</p>
                <h4 className={'center'} style={{marginRight: 50, marginLeft: 340}}>Основные показатели
                    социально-экономического развития</h4>
            </div>
            <table className="highlight">
                <thead>
                <tr>
                    <th className={'center'} style={{fontSize:20}}>Показатели</th>
                    {dataInfo[0].map((info, index) => {
                        return <th key={index + info}>{index + 2010}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                {title.map((title, id) => {
                    return (
                        <tr key={id + 'tr'}>
                            <th
                                key={id}
                                onClick={(e) => clickHandler(e, id)}
                                style={{cursor: 'pointer'}}
                            >{title}</th>
                            {dataInfo[id].map((title, index) => {
                                return (
                                    <td key={index}><input
                                        style={{
                                            cursor: 'pointer',
                                            borderBottom: 'none', height: '100%', margin: 0,
                                            color: 'rgba(0,0,0,0.87)',
                                            borderColor: 'rgba(118, 118, 118, 0.3)'
                                        }}
                                        type="number"
                                        defaultValue={title.title}
                                        onChange={event => Rename(event, index, id)}
                                        disabled={change}
                                    /></td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {isOpen.data ? <LineTable
                title={isOpen.title}
                content={dataInfo[isOpen.id]}
            /> : null}
        </div>
    );
};

export default Table;
