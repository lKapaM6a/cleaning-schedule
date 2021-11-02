import React from 'react'
import styles from './Home.module.scss';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Checkbox from '@mui/material/Checkbox';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export const Home = props => {

    function createData(fullName, date, status, checkbox) {
        return {fullName, date, status, checkbox};
    }

    const rows = [
        createData('Тест', '10.10.2021', 'Done', 'true'),
        createData('Тест 2', '11.10.2021', 'Failed', 'false'),
    ];

    return (
        <>
            <div className="container my-5">
                <TableContainer component={Paper}>
                    <Table className={styles.table} sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={styles.head}>Username</TableCell>
                                <TableCell className={styles.head}>Date</TableCell>
                                <TableCell className={styles.head} align="center">Status</TableCell>
                                <TableCell className={styles.head} align="center">Check</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.fullName}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}>

                                    <TableCell className={styles.item} component="th" scope="row">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon/>
                                            <span className='ms-2'>
                                                {row.fullName}
                                            </span>
                                        </div>
                                    </TableCell>

                                    <TableCell className={styles.item} component="th" scope="row">
                                        <div className='d-flex'>
                                            <CalendarTodayIcon fontSize={"small"}/>
                                            <span className='ms-2'>
                                                {row.date}
                                            </span>
                                        </div>
                                    </TableCell>

                                    <TableCell className={styles.item} width={250}
                                               align="center">{row.status}</TableCell>

                                    <TableCell className={styles.item} width={200} align="center">
                                        {(row.checkbox) === 'true' ?
                                            <Checkbox defaultChecked disabled/>
                                            :
                                            <>
                                                <Checkbox disabled/>
                                            </>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className='py-3'>
                    <Link to="/users">
                        <Button variant="contained">
                            Все пользователи
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

