import React from 'react'
import styles from '../Header.module.scss'
import Button from '@mui/material/Button'

export const HeaderLogo = props => {

    return (
        <>
            <Button title="Go to start page" variant="text">
                <span className={styles.headerLogo}/>
            </Button>
        </>
    )
}

