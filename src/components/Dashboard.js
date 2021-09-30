import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Dashboard = () => {

    const url = 'https://www.hpb.health.gov.lk/api/get-current-statistical'

    const [covidData, setCovidData] = useState(null)

    useEffect(() => {

        axios.get(url).
            then(response => {

                setCovidData(response.data)

            })

    }, [url])


    if (covidData) {
        return (
            <>


                <h2>Covid Status Dashboard</h2>
                





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