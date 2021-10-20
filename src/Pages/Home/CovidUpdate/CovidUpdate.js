import React, { useEffect, useState } from 'react';
import './CovidUpdate.css'
const CovidUpdate = () => {
    const [covidCases, setCovidCases] = useState({});
    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries/bangladesh')
            .then(res => res.json())
            .then(data => setCovidCases(data))
    }, [])
    const { country, cases, todayCases, deaths, todayDeaths, recovered, totalTests } = covidCases;
    return (
        <div className="container">
            <h1 className="text-danger text-center my-5">Covid-19 Update of {country}</h1>
            <div className="grid">
                <div className="covid-update-box bg-info border border-info shadow  p-4 bg-opacity-10">
                    <div>
                        <h4 className="color-b">Total Cases</h4>
                        <p className="">{cases}</p>
                    </div>
                    <div>
                        <h4 className="color-b">Today Cases</h4>
                        <p>{todayCases}</p>
                    </div>
                </div>
                <div className="covid-update-box bg-danger border border-danger shadow p-4  bg-opacity-10">
                    <div>
                        <h4 className="text-danger">Total Deaths</h4>
                        <p>{deaths}</p>
                    </div>
                    <div>
                        <h4 className="text-danger">Today Deaths</h4>
                        <p>{todayDeaths}</p>
                    </div>
                </div>
                <div className="covid-update-box bg-success border border-success shadow p-4  bg-opacity-10">
                    <h3 className="text-success ">Recovered</h3>
                    <br />
                    <strong>{recovered}</strong>
                </div>
            </div>
            <br />
            <h3 className="color-b bg-info bg-opacity-10 border border-info p-2 text-center">Total Test : {totalTests}</h3>
        </div>
    );
};

export default CovidUpdate;