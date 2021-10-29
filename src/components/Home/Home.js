import React from 'react'
import styles from './Home.module.scss';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";


export const Home = props => {

    function createData(fullName, status, checkbox) {
        return {fullName, status, checkbox};
    }

    const rows = [
        createData('Тест', 'Выполнен', 'true'),
        createData('Тест 2', 'Не выполнен', 'false'),
    ];

    const label = {inputProps: {'aria-label': 'checkbox'}};

    return (
        <>
            <div className="container my-5">
                <TableContainer component={Paper}>
                    <Table className={styles.table} sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={styles.head}>ФИО</TableCell>
                                <TableCell className={styles.head} align="center">Статус</TableCell>
                                <TableCell className={styles.head} align="center">Отмечен</TableCell>
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
                                            <span className='mx-2'>
                                                {row.fullName}
                                            </span>
                                        </div>
                                    </TableCell>

                                    <TableCell className={styles.item} width={250}
                                               align="center">{row.status}</TableCell>

                                    <TableCell className={styles.item} width={200} align="center">
                                        {(row.checkbox) === 'true' ?
                                            <FormControlLabel className={styles.item}
                                                              control={<Checkbox {...label} defaultChecked disabled/>}
                                                              label="Отмечен"/>
                                            :
                                            <>
                                                <FormControlLabel control={<Checkbox {...label} disabled/>}
                                                                  label="Не отмечен"/>
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

