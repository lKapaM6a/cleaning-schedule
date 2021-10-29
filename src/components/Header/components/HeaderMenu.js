import React from 'react'
import styles from '../Header.module.scss'

import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import DraftsIcon from '@mui/icons-material/Drafts';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';

export const HeaderMenu: FC<props> = props => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    return (
        <>
            <React.Fragment key={'left'}>
                <Tooltip title={localization.showMenu}>
                    <Button className={styles.headerMenu} onClick={toggleDrawer('left', true)}>
                        <MenuIcon/>
                        {localization.menu}
                    </Button>
                </Tooltip>

                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    <Box
                        sx={{width: 'left' === 'top' || 'left' === 'bottom' ? 'auto' : 280}}
                        role="presentation"
                        onClick={toggleDrawer('left', false)}
                        onKeyDown={toggleDrawer('left', false)}
                    >
                        <List>
                            <Link className={`d-block ${styles.linkInteraction}`} to="/stats">
                                <ListItem button key={'Статистика'}>
                                    <QueryStatsIcon fontSize={'small'} className='me-2'/>
                                    <ListItemText className={styles.link} primary={'Статистика'}/>
                                </ListItem>
                            </Link>

                            <Link className={`d-block ${styles.linkInteraction}`} to="/users">
                                <ListItem button key={'Пользователи'}>
                                    <PeopleAltIcon fontSize={'small'} className='me-2'/>
                                    <ListItemText className={styles.link} primary={'Пользователи'}/>
                                </ListItem>
                            </Link>

                            <Link className={`d-block ${styles.linkInteraction}`} to="/settings">
                                <ListItem button key={'Настройки'}>
                                    <SettingsIcon fontSize={'small'} className='me-2'/>
                                    <ListItemText className={styles.link} primary={'Настройки'}/>
                                </ListItem>
                            </Link>

                            <Link className={`d-block ${styles.linkInteraction}`} to="/drafts">
                                <ListItem button key={'Черновики'}>
                                    <DraftsIcon fontSize={'small'} className='me-2'/>
                                    <ListItemText className={styles.link} primary={'Черновики'}/>
                                </ListItem>
                            </Link>
                        </List>
                        <Divider/>
                        <List>
                            <Link className={`d-block ${styles.linkInteraction}`} to="/calendar">
                                <ListItem button key={'Календарь'}>
                                    <CalendarTodayIcon fontSize={'small'} className='me-2'/>
                                    <ListItemText className={styles.link} primary={'Календарь'}/>
                                </ListItem>
                            </Link>

                            <Link className={`d-block ${styles.linkInteraction}`} to="/spam">
                                <ListItem button key={'Спам'}>
                                    <HourglassDisabledIcon fontSize={'small'} className='me-2'/>
                                    <ListItemText className={styles.link} primary={'Спам'}/>
                                </ListItem>
                            </Link>
                        </List>
                    </Box>
                </SwipeableDrawer>
            </React.Fragment>
        </>
    )
}

export interface HeaderMenuLocalization {
    menu: string,
    showMenu: string
}

const localization: HeaderMenuLocalization = {
    menu: 'Меню',
    showMenu: 'Открыть меню',
}