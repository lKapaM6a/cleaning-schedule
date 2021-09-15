import React, {FC, useState} from 'react'
import {Footer} from '../Footer/Footer'
import {Header} from '../Header/Header'

interface Props {
    footer?: boolean,
    header?: boolean
}

export const Layout: FC<Props> = props => {
    const {children, header = true, footer = true} = props

    return (
        <div className="page">
            <div className="page__wrapper">
                {header && (
                    <Header/>
                )}
                <div className="page__body">
                    {children}
                </div>
            </div>
            {footer && <Footer/>}
        </div>
    )
}