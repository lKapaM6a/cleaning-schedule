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

    const list = (anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Статистика', 'Пользователи', 'Настройки', 'Черновики'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText className={styles.link} primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['Календарь', 'Спам'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText className={styles.link} primary={text}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

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
                    {list('left')}
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
    showMenu: 'Вернуться на главную страницу',
}