import React, {FC} from 'react'
import {Chart} from "react-charts";

interface Props {
}


export const CustomChart: FC<Props> = props => {
    const series = React.useMemo(
        () => ({
            type: "area"
        }),
        []
    );
    const axes = React.useMemo(
        () => [
            {primary: true, position: "bottom", type: "time"},
            {position: "left", type: "linear", stacked: true}
        ],
        []
    );

    const data = React.useMemo(
        () => [
            {
                label: "User 1",
                datums: [
                    {
                        x: new Date("2021-10-01"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-02"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-03"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-04"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-05"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-06"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-07"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-08"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-09"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-10"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-11"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-12"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-13"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-14"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-15"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-16"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-17"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-18"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-19"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-20"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-21"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-22"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-23"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-24"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-25"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-26"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-27"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-28"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-29"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-30"),
                        y: 0
                    },
                ]
            },
            {
                label: "User 2",
                datums: [
                    {
                        x: new Date("2021-10-01"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-02"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-03"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-04"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-05"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-06"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-07"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-08"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-09"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-10"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-11"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-12"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-13"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-14"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-15"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-16"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-17"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-18"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-19"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-20"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-21"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-22"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-23"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-24"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-25"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-26"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-27"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-28"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-29"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-30"),
                        y: 0
                    },
                ]
            },
            {
                label: "User 3",
                datums: [
                    {
                        x: new Date("2021-10-01"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-02"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-03"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-04"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-05"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-06"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-07"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-08"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-09"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-10"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-11"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-12"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-13"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-14"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-15"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-16"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-17"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-18"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-19"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-20"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-21"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-22"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-23"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-24"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-25"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-26"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-27"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-28"),
                        y: 0
                    },
                    {
                        x: new Date("2021-10-29"),
                        y: 1
                    },
                    {
                        x: new Date("2021-10-30"),
                        y: 1
                    },
                ]
            }
        ],
        []
    );

    const getSeriesStyle = React.useCallback(
        () => ({
            transition: 'all .5s ease'
        }),
        []
    )
    const getDatumStyle = React.useCallback(
        () => ({
            transition: 'all .5s ease'
        }),
        []
    )


    return (
        <>
            <div style={{width: "1000px", height: "500px"}}>
                <Chart data={data}
                       series={series}
                       axes={axes}
                       tooltip
                       getSeriesStyle={getSeriesStyle}
                       getDatumStyle={getDatumStyle}
                />
            </div>
        </>
    )
}

