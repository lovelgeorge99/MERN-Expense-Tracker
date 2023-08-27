import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart,
  ArcElement,
  Title,
  Legend,
  DoughnutController,
  Tooltip,
  } from 'chart.js'

Chart.register(ArcElement,Title,Legend,DoughnutController,Tooltip);

function Graph({income,expense}) {
  
    const data = {
        labels: ['Income $'+income,'Expense $'+expense],
        datasets: [{
          label: 'Expense Chart',
          data: [income, expense],
          backgroundColor: [
            '#3F9B0B',
            '#C11B17',
           
          ],
          hoverOffset: 4
        }]
      };
  return (
    <div className='flex justify-content max-w-xs mx-auto'>
        <div className='item'>
            <div className='chart relative'>
                <Doughnut data={data}/>
            </div>
            <div className='flex flex-col py-10 gap-4'>
             
            </div>
        </div>
        
    </div>
  )
}

export default Graph