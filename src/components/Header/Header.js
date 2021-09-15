import React, {FC} from 'react'
import styles from './Header.module.scss'

interface Props {

}

export const Header: FC<Props> = props => {

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className={`${styles.headerIconWrapper} d-flex align-items-center`}>
                                <div className={`${styles.headerIcon} ${styles.headerBurger}`}/>
                                <span className={`${styles.headerIconText}`}>Open menu</span>
                            </div>
                        </div>

                        <div className="col-md-6 text-center">
                            <div className={styles.headerLogo}>
                                Logo
                            </div>
                        </div>

                        <div className="col-md-3 text-end">
                            <div className={`${styles.headerIconWrapper} d-flex align-items-center justify-content-end`}>
                                <div className={`${styles.headerIcon} ${styles.headerUser}`}/>
                                <span className={`${styles.headerIconText}`}>Username</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

