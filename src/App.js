import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import { useEffect, useState } from 'react';
import Menu from './Menu/Menu';
import HomePage from './HomePage/HomePage';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
import Charts from './charts/charts';
import axios from 'axios';

import { Chart, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import Chartd from './chart data/chartdata';
Chart.register(ArcElement, Tooltip, Legend);

const baseUrl = "http://localhost:3000/budget"

function App() {
  const [dataSource, setDataSource] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#83FF33',
          '#F633FF',
          '#FF3333',
        ],
      }
    ],

    labels: []
  })

  const [dataSourceNew, setDataSourceNew] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}`)
      .then((res) => {
        setDataSourceNew(res.data.myBudget);
        setDataSource(
          {
            datasets: [
              {
                data: res.data.myBudget.map((v) => v.budget),
                backgroundColor: [
                  '#ffcd56',
                  '#ff6384',
                  '#36a2eb',
                  '#fd6b19',
                  '#83FF33',
                  '#F633FF',
                  '#FF3333',
                ],
              }
            ],

            labels: res.data.myBudget.map((v) => v.title)
          }
        )
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <Router>
      <Menu />
      <Hero />
      <div className='mainContainer'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
      <center>
        <Charts chartData={dataSource} />
        <Chartd dataSource={dataSourceNew} />
      </center>
      <Footer />
    </Router>

  );
}

export default App;