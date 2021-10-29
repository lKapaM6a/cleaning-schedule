import React from 'react'
import {Layout} from "../components/Layout/Layout";
import {Home} from "../components/Home/Home";

export const HomePage = props => {
    return (
        <Layout breadcrumbs={false} logoLink={false}>
            <Home/>
        </Layout>
    )
}

