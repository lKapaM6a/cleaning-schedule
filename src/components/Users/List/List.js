import React, {FC, useState, useEffect, useCallback} from 'react'
import {
    useQuery,
    gql
} from "@apollo/client";

interface Props {
    localization?: ListLocalization
}

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const DelayedList: FC<Props> = props => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            {data && (
                <>
                    <div>
                        <div>
                            {data?.rates?.map(({currency, rate}) => (
                                <div key={currency}>
                                        <span>
                                            {currency}: {rate}
                                        </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

const localization = {}

export interface ListLocalization {

}
