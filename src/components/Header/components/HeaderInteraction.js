import React from 'react'
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import PersonAdd from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Settings from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PieChartIcon from '@mui/icons-material/PieChart';
import {Link} from "react-router-dom";

export const HeaderInteraction = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const userName = 'Victor Berezin',
        userNameIcon = userName.substring(0, 1);

    return (
        <>
            <Tooltip title="Открыть навигацию">
                <IconButton onClick={handleClick} size="small" sx={{ml: 2}}>
                    <Avatar sx={{width: 32, height: 32}}>{userNameIcon}</Avatar>
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                <MenuItem>
                    <ListItemIcon>
                        <PersonIcon fontSize="small"/>
                    </ListItemIcon>
                    <span className="fw-semibold fs-14">Супер админ</span>
                </MenuItem>

                <Divider/>

                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small"/>
                    </ListItemIcon>
                    <span className="fw-semibold fs-14">Добавить пользователя</span>
                </MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <PersonRemoveIcon fontSize="small"/>
                    </ListItemIcon>
                    <span className="fw-semibold fs-14">Удалить пользователя</span>
                </MenuItem>

                <Divider/>

                <Link to="/stats">
                    <MenuItem>
                        <ListItemIcon>
                            <PieChartIcon fontSize="small"/>
                        </ListItemIcon>
                        <span className="fw-semibold fs-14">Статистика22</span>
                    </MenuItem>
                </Link>

                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small"/>
                    </ListItemIcon>
                    <span className="fw-semibold fs-14">Настройки</span>
                </MenuItem>

                <Divider/>

                <MenuItem>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small"/>
                    </ListItemIcon>
                    <span className="fw-semibold fs-14">Выйти</span>
                </MenuItem>
            </Menu>
        </>
    )
}

