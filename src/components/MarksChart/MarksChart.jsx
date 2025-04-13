import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data;

     const MarksChartData = marksData.map(studentData => {
        const student = {
            id : studentData.studentId,
            name : studentData.name,
            physics : studentData.marks.physics,
            chemistry : studentData.marks.chemistry,
            math : studentData.marks.math
        }
        const avg = (student.physics + student.math + student.chemistry)
        student.avg  = avg
        return student
    

    })

     console.log(MarksChartData)
  


     return (
        <div>
  <BarChart width={400}  height={400} data={MarksChartData}>
 <XAxis dataKey={'name'}> </XAxis>
 <YAxis>  </YAxis>
 <Bar dataKey={'avg'} fill='yellow'></Bar>
 <Bar dataKey={'chemistry'} fill='red'></Bar>
  </BarChart>
        </div>
    );
};

export default MarksChart;