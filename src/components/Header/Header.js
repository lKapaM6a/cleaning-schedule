import React from 'react'
import styles from './Header.module.scss'
import {HeaderMenu} from "./components/HeaderMenu";
import {HeaderLogo} from "./components/HeaderLogo";
import {HeaderInteraction} from "./components/HeaderInteraction";


export const Header = props => {


    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3">
                            <HeaderMenu/>
                        </div>

                        <div className="col-6 d-flex justify-content-center">
                            <HeaderLogo/>
                        </div>

                        <div className="col-3 text-end">
                            <HeaderInteraction/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

