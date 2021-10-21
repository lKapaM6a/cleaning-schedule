import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export const Home = props => {
    const {localization} = props

    function createData(fullName, status, checkbox) {
        return {fullName, status, checkbox};
    }

    const rows = [
        createData('Тест Тест Тест', 'Выполнен', 'true'),
        createData('Тест 2 Тест 2 Тест 2', 'Не выполнен', 'false'),
    ];

    const label = {inputProps: {'aria-label': 'checkbox'}};

    return (
        <>
            <div className="container my-5">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ФИО</TableCell>
                                <TableCell align="center">Статус</TableCell>
                                <TableCell align="center">Отмечен</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.fullName}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.fullName}
                                    </TableCell>
                                    <TableCell width={250} align="center">{row.status}</TableCell>
                                    <TableCell width={200} align="center">
                                        <FormGroup>
                                        </FormGroup>
                                        {(row.checkbox) === 'true' ?
                                            <FormControlLabel control={<Checkbox {...label} defaultChecked disabled/>}
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
            </div>
        </>
    )
}

