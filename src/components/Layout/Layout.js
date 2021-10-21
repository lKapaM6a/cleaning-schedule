import React, {FC} from 'react'
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

    return (
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
    )
}