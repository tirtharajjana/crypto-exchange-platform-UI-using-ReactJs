import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Avatar, Chip } from '@mui/material';
import { fetchData } from '../../../api/fetchData';




const TableTabPanel = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetch = async () => {


            setData(await (await fetchData()).data.data);
        }
        fetch()
        // setData(fetchData());
    }, [])
    // console.log(data);

    return (
        <TableContainer sx={{ borderRadius: "15px" }} component={Paper}>
            <Table sx={{ minWidth: 650, bgcolor: "#191B20", }} aria-label="simple table">
                <TableHead  >
                    <TableRow >
                        <TableCell sx={{ color: "white" }} >ASSET</TableCell>
                        <TableCell sx={{ color: "white" }} align='center'>AMOUNT</TableCell>
                        <TableCell sx={{ color: "white" }} align="center">USER ACCOUNT</TableCell>
                        <TableCell sx={{ color: "white" }} align="center">REFERRAL EARNING</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody sx={{ bgcolor: "#0E1014" }}>
                    {data.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ color: "white", display: "flex" }} component="th" scope="row">
                                <Box sx={{ mr: 1, mt: 1 }}>
                                    <img alt="" src={row.img} />

                                </Box>
                                <Box>
                                    <Box sx={{ fontSize: "15px", letterSpacing: "1px", fontWidth: 'bold' }}>{row.asset}</Box>
                                    <Box sx={{ color: "gray", fontSize: "12px" }} >{row.type} &nbsp; <Chip avatar={<Avatar alt="Natacha" src={row.chain.img} />} label={row.chain.name} size="small" sx={{ bgcolor: "#242731", color: "white", fontSize: "8px", fontWeight: 1000 }} /></Box>
                                </Box>
                            </TableCell>
                            <TableCell align="center" sx={{ color: "white" }} >
                                <Box sx={{ fontSize: "15px", letterSpacing: "1px", fontWidth: "bold" }} >{row.amount} BNB</Box>
                                <Box sx={{ color: "gray" }} >{row.state}</Box>
                            </TableCell>
                            <TableCell align="center" sx={{ color: "white" }}>

                                <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '6rem', whiteSpace: "nowrap" }}>

                                    &nbsp;&nbsp;&nbsp;&nbsp; {row.user}

                                </div>
                            </TableCell>
                            <TableCell align="center" sx={{ color: "white" }} >
                                <Box>
                                    <Box sx={{ fontSize: "15px", letterSpacing: "1px", fontWidth: "bold" }} >{row.referral_earnings} BNB</Box>
                                    <Box sx={{ color: "gray", fontSize: "12px", diaplay: "flex" }}  >View on BSC SCAN&nbsp;<img alt="" src="https://img.icons8.com/external-bearicons-blue-bearicons/15/000000/external-Share-social-media-bearicons-blue-bearicons.png" /></Box>

                                </Box>

                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>)
}

export default TableTabPanel