
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
        "studentId": 1,
        "name": "Arafat Hossain",
        "physics": 92,
        "chemistry": 88,
        "math": 95
    },
    {
        "studentId": 2,
        "name": "Nishi Rahman",
        "physics": 81,
        "chemistry": 85,
        "math": 89
    },
    {
        "studentId": 3,
        "name": "Tamim Iqbal",
        "physics": 75,
        "chemistry": 70,
        "math": 82
    },
    {
        "studentId": 4,
        "name": "Farzana Akter",
        "physics": 88,
        "chemistry": 91,
        "math": 86
    },
    {
        "studentId": 5,
        "name": "Rafiul Islam",
        "physics": 95,
        "chemistry": 97,
        "math": 94
    },
    {
        "studentId": 6,
        "name": "Sneha Khatun",
        "physics": 69,
        "chemistry": 74,
        "math": 78
    },
    {
        "studentId": 7,
        "name": "Junaid Ahmed",
        "physics": 82,
        "chemistry": 79,
        "math": 85
    },
    {
        "studentId": 8,
        "name": "Moumita Sarker",
        "physics": 91,
        "chemistry": 90,
        "math": 92
    },
    {
        "studentId": 9,
        "name": "Riaz Mahmud",
        "physics": 64,
        "chemistry": 67,
        "math": 70
    },
    {
        "studentId": 10,
        "name": "Tanha Akter",
        "physics": 89,
        "chemistry": 86,
        "math": 88
    }
]


const ResultChat = () => {
    return (
        <div>
            <LineChart width={500} height={400} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={''}></YAxis>
                <Line dataKey={'math'}> </Line>
                <Line dataKey="physics" stroke="red" > </Line>
                <Line dataKey="chemistry" stroke="blue" > </Line>
            </LineChart>
        </div>
    );
};

export default ResultChat;