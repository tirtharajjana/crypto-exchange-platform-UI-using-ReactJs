import React from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';


const Fee = () => {
    const SubGrid = () => {
        return (
            <>
                <Box sx={{ m: 1, color: "white", p: 2, bgcolor: "#191B20", borderRadius: "15px" }}>
                    <Box sx={{ fontSize: '25px', fontWeight: 500 }} ><img alt="" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/30/000000/external-gold-fairytale-wanicon-lineal-color-wanicon.png" />&nbsp;12.5% of fee</Box>
                    <Box sx={{ fontSize: '15px', color: 'GrayText', p: 1 }}>Your Referral Link for XYZ</Box>
                    <Box sx={{ display: "flex", justifyContent: 'space-between', bgcolor: "#242731", p: 1, borderRadius: "10px" }}>
                        <Box sx={{ color: "white", fontSize: "15px", fontWeight: "bold", }}>
                            https://unityexchange.design
                        </Box>
                        <img alt="" src="https://img.icons8.com/officel/20/000000/copy.png" />
                    </Box>


                </Box>
            </>
        )
    }
    return (
        <Grid container spacing={2}>
            <Grid item lg={6} >
                <SubGrid />
            </Grid>
            <Grid item lg={6} >
                <SubGrid />
            </Grid>
        </Grid>

    )
}

export default Fee