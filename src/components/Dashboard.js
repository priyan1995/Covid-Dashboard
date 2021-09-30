import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Dashboard = () => {

    const url = 'https://www.hpb.health.gov.lk/api/get-current-statistical'

    const [covidData, setCovidData] = useState(null)

    useEffect(() => {

        axios.get(url).
            then(response => {
                setCovidData(response.data.data)
            })
    }, [url])

    console.log(covidData);

    if (covidData) {
        return (
            <>

                <div className="container">
                    <div className="row">                       

                        <div className="col-lg-4">
                            <div className="boxed">
                                <h4>Total Confirmed Cases</h4>
                                <p>{covidData.local_total_cases}</p>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="boxed">
                                <h4>Total Recovered</h4>
                                <p>{covidData.local_recovered}</p>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="boxed">
                                <h4>Total Deaths</h4>
                                <p>{covidData.local_deaths}</p>
                            </div>
                        </div>





                    </div>
                </div>










            </>
        )
    }

    return (
        <>
            <div>
                <h2>Data Not Found</h2>
            </div>
        </>
    )

}