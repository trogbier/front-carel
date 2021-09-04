import React from 'react';
import BigTable from "../components/BigTable";
import Table from "../components/Table";

const TablePages = () => {
    return (
        <div>
            <h4 className={'center'}>Прогноз бюджета</h4>
            <Table/>
            <h4 className={'center'}>Основные показатели социально-экономического развития</h4>
            <BigTable/>
        </div>
    );
};

export default TablePages;