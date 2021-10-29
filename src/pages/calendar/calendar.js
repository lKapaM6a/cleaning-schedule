import React from 'react'
import {Layout} from "../../components/Layout/Layout";
import {BigCalendar} from "../../components/calendar/BigCalendar";

export const CalendarPage = props => {
    return (
        <Layout logoLink={true}>
            <div className='container my-5'>
                <h1>Календарь</h1>
                <div className='py-5'/>
                <BigCalendar/>
            </div>
        </Layout>
    )
}

