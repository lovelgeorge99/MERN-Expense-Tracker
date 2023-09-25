import React from 'react'
import { Chart as ChartJs ,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
    } from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)
function LineGraph({transaction,type}) {

    const sortedIncomes = transaction.sort((a, b) => new Date(a.date) - new Date(b.date));
    const incomeLabels = transaction.map((income) =>
    new Date(income.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  );
 
    const color = type === 'Income' ? 'green' : type === 'Expense' ? 'red' : 'black';


    const data ={
        labels:incomeLabels,
       
        // labels:formattedDates,

        datasets:[
            {
                label:type,
                data:[
                    ...sortedIncomes.map((income)=>{
                        const {amount} =income
                        return amount
                    })
                ],
                backgroundColor:color,
                tension:0.2,
                borderColor:color

            },
            
        ]
    }
    const options = {
        scales: {
          x: {
            ticks: {
              maxRotation: 90,
              minRotation: 30,
             
            },
          },
        },
      }
  return (
    <div>
        <Line data={data}  options={options} />
    </div>
  )
}

export default LineGraph

