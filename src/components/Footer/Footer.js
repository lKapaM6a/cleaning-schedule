import React, {FC} from 'react'
import styles from './Footer.module.scss'

interface Props {

}

export const Footer: FC<Props> = props => {
    return (
        <>
            <footer className={styles.footer}>
                <div className="container">
                    <div className="text-center">
                        Copyright 2021
                    </div>
                </div>
            </footer>
        </>
    )
}

