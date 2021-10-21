import React, {FC} from 'react'
import styles from '../Header.module.scss'
import Tooltip from '@mui/material/Tooltip';
import {Link} from "react-router-dom";

interface Props {
    logoLink?: boolean
}

export const HeaderLogo: FC<Props> = props => {
    const {logoLink} = props
    return (
        <>
            {(logoLink) ? (
                    <>
                        <Tooltip title={localization.back}>
                            <Link to="/">
                                <span className={styles.headerLogo}/>
                            </Link>
                        </Tooltip>
                    </>
                ) :
                (
                    <>
                        <span className={styles.headerLogo}/>
                    </>
                )}
        </>
    )
}

export interface HeaderLogoLocalization {
    back: string
}

const localization: HeaderLogoLocalization = {
    back: 'Вернуться на главную страницу',
}


