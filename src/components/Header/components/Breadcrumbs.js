import React, {FC} from 'react'
import Tooltip from '@mui/material/Tooltip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";

interface Props {
}

export const Breadcrumbs: FC<Props> = props => {
    return (
        <>
            <div className="container my-3">
                <Tooltip title={localization.toolInfo}>
                    <Link to="/">
                        <span className='fs-14 d-inline-flex align-items-center'>
                            <ArrowBackIcon fontSize={"small"}/>
                            <span className='mx-2 fw-semibold'>
                                {localization.back}
                            </span>
                        </span>
                    </Link>
                </Tooltip>
            </div>
        </>
    )
}

export interface BreadcrumbsLocalization {
    back: string,
    toolInfo: string
}

const localization: BreadcrumbsLocalization = {
    back: 'Вернуться на главную',
    toolInfo: 'Вернуться на главную страницу',
}
