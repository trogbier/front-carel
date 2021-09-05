import React, {useContext} from 'react';
import {Line} from "react-chartjs-2";
import {ContextData} from "../context/ContextData";

const LineChar = () => {
    const {expect, fact, countYear} = useContext(ContextData)
    return (
        <div style={{marginBottom: 100}}>
            <Line
                width="400"
                height="400"
                data={{
                    labels: countYear.map((data, index) => {
                        return index + 2010
                    }),
                    datasets: [{
                        label: 'Фактически',
                        data: fact,
                        backgroundColor: [
                            'rgb(246,0,61)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)'
                        ],
                        borderWidth: 1

                    },
                        {
                            label: 'Прогноз',
                            data: expect.map((title, id) => {
                                return expect[id].title
                            }),
                            backgroundColor: [
                                'rgb(23,15,227)'
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                            ],
                            borderWidth: 1
                        }

                    ],

                }}
                options={{maintainAspectRatio: false}}
            />
        </div>
    );
};

export default LineChar;