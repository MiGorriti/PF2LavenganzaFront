import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, BarElement, Title, Filler, } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import axios from 'axios';
import "./graficasAdmin.css";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, BarElement, Title, Filler);

const monthNames = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
};

const Graficas = () => {
    const [statData, setStatData] = useState([]);

    useEffect(() => {
        // Hacer una solicitud HTTP para obtener los datos de la ruta
        axios.get(`http://localhost:3001/dashboard/Allstatistics`)
            .then(response => {
                // Procesar los datos de estadísticas aquí
                setStatData(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);

    const processDataForCharts = (key) => {
        if (key) {
            return statData.map((data) => data[key]);
        } else {
            return statData.map((data) => monthNames[data.month]);
        }
    };

    const pieChartData = {
        labels: processDataForCharts(),
        datasets: [
            {
                label: 'Number of reservations',
                data: processDataForCharts('numberOfReservations'),
                backgroundColor: ['red', 'blue', 'green'],
            },
        ],
    };

    const barrasComisionesPorDiaData = {
        labels: processDataForCharts(),
        datasets: [
            {
                label: 'Total reservations',
                data: processDataForCharts('totalReservationPrice'),
                backgroundColor: 'blue',
            },
        ],
    };

    const barrasVentasPorMesData = {
        labels: processDataForCharts(),
        datasets: [
            {
                label: 'Total profits',
                data: processDataForCharts('totalEarnings'),
                backgroundColor: 'green',
            },
        ],
    };
    return (
        <div className="graficas-container">

            <div className="graficas-section">
                <h1 className='graficas-heading'>Total reservations</h1>
                <div className='miGraficoContainer'>
                    <Bar data={barrasComisionesPorDiaData} />
                </div>
            </div>
            <div className="graficas-section">
                <h1 className='graficas-heading'>Number of reservations</h1>
                <div className='miGraficoContainer'>
                    <Pie data={pieChartData} />
                </div>
            </div>
            <div className="graficas-section">
                <h1 className='graficas-heading'>Total profits</h1>
                <div className='miGraficoContainer'>
                    <Bar data={barrasVentasPorMesData} />
                </div>
            </div>
        </div>
    );
};

export default Graficas;