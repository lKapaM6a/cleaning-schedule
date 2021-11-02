import React from 'react'
import {Layout} from "../../components/Layout/Layout";
import {DelayedList} from "../../components/Users/List/List";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
});

export const UsersPage = props => {
    return (
        <Layout logoLink={true}>
            <div className='container my-5'>
                <h1>Все пользоваетели</h1>
                <div className='py-2'/>

                <ApolloProvider client={client}>
                    <DelayedList/>
                </ApolloProvider>
            </div>
        </Layout>
    )
}

