import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export const Dashboard = () => {

    const url = 'https://www.hpb.health.gov.lk/api/get-current-statistical'

    const [covidData, setCovidData] = useState(null)
    const [covidChartData, setCovidChartData] = useState(null)

    useEffect(() => {

        axios.get(url).
            then(response => {
                setCovidData(response.data.data)
                //setCovidChartData(response.data.data.daily_pcr_testing_data)
                setCovidChartData(response.data.data.daily_pcr_testing_data)                

            })
            



    }, [url])

    //console.log(covidData);

    //const datenw = covidChartData[date];

    console.log(covidChartData);
   // console.log(datenw);

    

    const options = {
        // series: [          
        //     {
        //         name: 'Covid Patients',
        //         data: [100,200,300,400,500]
        //      }
        // ]

        series:[
            {
                name: 'Covid PCR Tests',
                data:covidChartData
            }
        ]

      
    }

    

    // axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical', csv => {
    //     data.daily_pcr_testing_data ={
    //         csv            
           
    //     };
    //     Highcharts.chart(options);
       
    // })
  

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
                                        <h4>Local Active Cases</h4>
                                        <p className="txt-warn">{covidData.local_active_cases}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="boxed">
                                    <div>
                                        <h4>Total New Cases</h4>
                                        <p className="txt-succ">{covidData.local_new_cases}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="boxed">
                                    <div>
                                        <h4>Local Deaths</h4>
                                        <p className="txt-dngr">{covidData.local_new_deaths}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <p className="upd-dt"> Last updated at: {covidData.update_date_time}</p>
                            </div>


                        </div>
                    </div>



                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <HighchartsReact highcharts={Highcharts} options={options} />
                        </div>
                    </div>
                </div>






            </>
        )
    }

    return (
        <>
            <div>
                <br />
                <h2>Loading ....</h2>
            </div>
        </>
    )

}