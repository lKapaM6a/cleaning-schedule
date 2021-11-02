import React, {FC, useState, useEffect, useRef} from 'react'
import LoadingBar from "react-top-loading-bar";
import {Footer} from '../Footer/Footer'
import {Header} from '../Header/Header'
import {Breadcrumbs} from "../Header/components/Breadcrumbs";

interface Props {
    footer?: boolean,
    header?: boolean,
    breadcrumbs?: boolean,
    logoLink?: boolean
}

export const Layout: FC<Props> = props => {
    const {
        children,
        header = true,
        footer = true,
        breadcrumbs = true,
        logoLink
    } = props

    const ref = useRef(null);

    const loaderPage = () => {
        ref.current.complete();
    };

    useEffect(() => (
        loaderPage()
    ), []);

    return (
        <>
            <LoadingBar
                height={3}
                color='#1976d2'
                ref={ref}
            />

            <div className="page">
                <div className="page__wrapper">
                    {header && (
                        <Header logoLink={logoLink}/>
                    )}

                    {breadcrumbs && (
                        <Breadcrumbs/>
                    )}

                    <div className="page__body">
                        {children}
                    </div>
                </div>

                {footer && <Footer/>}
            </div>
        </>
    )
}