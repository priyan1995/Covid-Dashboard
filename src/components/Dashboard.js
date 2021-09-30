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

                        <div className="col-lg-12">
                            <h2>Covid Status Dashboard</h2>
                        </div>

                        <div className="col-lg-4">
                            <h4>Date</h4>
                            <p>{covidData.update_date_time}</p>

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