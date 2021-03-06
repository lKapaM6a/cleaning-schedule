import React, {FC} from 'react'
import {Layout} from "../components/Layout/Layout";
import Home from "../components/Home/Home";

interface Props {

}

const HomePage: FC<Props> = props => {
    const {localization} = props
    return (
        <Layout>
            <Home/>
        </Layout>
    )
}
export default HomePage

