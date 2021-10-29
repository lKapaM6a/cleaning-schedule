import React from 'react'
import {Layout} from "../../components/Layout/Layout";
import {CustomChart} from "../../components/stats/CustomChart";

export const StatsPage = props => {
    return (
        <Layout logoLink={true}>
            <div className='container'>
                <h1>Статистика</h1>

                <div className="my-5"/>

                <CustomChart/>
            </div>
        </Layout>
    )
}

