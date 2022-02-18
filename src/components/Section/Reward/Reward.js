import React from 'react'
import Box from '@mui/material/Box';
import { Button, Chip } from '@mui/material';
import Stack from '@mui/material/Stack';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
const Reward = () => {
    return (
        <>
            <Box sx={{ m: 1, color: "white", p: 2, bgcolor: "#191B20", borderRadius: "15px" }}>
                <Box sx={{ fontSize: '25px', }} >Your Rewards</Box>
                <br />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', }} >
                    <Box sx={{ fontSize: '30px', fontWeight: 500 }}>$0.26231428</Box>
                    <Button variant="contained" sx={{ borderRadius: "15px" }} startIcon={<SendToMobileIcon />}>Custom Link</Button>
                </Box>
                <br />
                <Stack direction="row" spacing={1}>
                    <Chip color='secondary' label="$40 AVAX" size="small" />
                    <Chip color='secondary' label="$10 BNB" size="small" />
                    <Chip color='secondary' label="$210 BTC" size="small" />
                </Stack>
            </Box>
        </>
    )
}

export default Reward