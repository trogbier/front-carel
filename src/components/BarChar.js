import React, {useContext} from 'react';
import {Bar} from "react-chartjs-2";
import {ContextData} from "../context/ContextData";

const BarChar = () => {
    const {expect, fact,countYear} = useContext(ContextData)

    return (
        <div style={{marginBottom: 100}}>
            <Bar
                width="400"
                height="400"
                data={{
                    labels: countYear.map((data, index) => {
                        return index + 2010
                    }),
                    datasets: [{
                        label: 'Отклонение от фактического результата',
                        data: fact.map((num, index) => {
                           let k = 1 - (num / expect[index].title)
                            return Math.abs(k)
                        }),
                        backgroundColor: [
                            'rgb(148,219,130)'
                        ],
                        borderColor: [
                            'rgb(27,160,68)'
                        ],
                        borderWidth: 1
                    }]
                }}
                options={{maintainAspectRatio: false}}
            />
        </div>
    );
};

export default BarChar;