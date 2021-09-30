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
                    <div className="figr-box">
                        <div className="row">

                            <div className="title-sec"><h3>Total Figures (SL)</h3></div>

                            <div className="seprator"></div>
                            <div className="col-lg-4">
                                <div className="boxed">
                                    <div>
                                        <h4>Total Confirmed Cases</h4>
                                        <p className="txt-warn">{covidData.local_total_cases}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="boxed">
                                    <div>
                                        <h4>Total Recovered</h4>
                                        <p className="txt-succ">{covidData.local_recovered}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="boxed">
                                    <div>
                                        <h4>Total Deaths</h4>
                                        <p className="txt-dngr">{covidData.local_deaths}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <p className="upd-dt"> Last updated at: {covidData.update_date_time}</p>
                            </div>
                        </div>
                    </div>


                    <div className="figr-box">
                        <div className="row">

                            <div className="title-sec"><h3>Daily Figures (SL)</h3></div>

                            <div className="seprator"></div>
                            <div className="col-lg-4">
                                <div className="boxed">
                                    <div>
                                        <h4>Total Confirmed Cases</h4>
                                        <p className="txt-warn">{covidData.local_total_cases}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="boxed">
                                    <div>
                                        <h4>Total Recovered</h4>
                                        <p className="txt-succ">{covidData.local_recovered}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="boxed">
                                    <div>
                                        <h4>Total Deaths</h4>
                                        <p className="txt-dngr">{covidData.local_deaths}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <p className="upd-dt"> Last updated at: {covidData.update_date_time}</p>
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