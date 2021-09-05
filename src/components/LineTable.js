import React from 'react';
import {Line} from "react-chartjs-2";

const LineChar = ({title,content}) => {
    return (
        <div style={{marginTop: 50}}>
            <Line
                width="400"
                height="400"
                data={{
                    labels: content.map((data, index) => {
                        return index + 2010
                    }),
                    datasets: [{
                        label: title,
                        data: content.map((data)=>{
                            return data.title
                        }),
                        backgroundColor: [
                            'rgb(246,0,61)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)'
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

export default LineChar