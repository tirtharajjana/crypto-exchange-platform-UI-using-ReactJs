import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import CustomizedMenus from './CustomizedMenus'
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import OutboxIcon from '@mui/icons-material/Outbox';
const CustomLink = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "7px" }} >

                <CustomizedMenus idx={1} />
                <CustomizedMenus idx={2} />
            </Box>
            <Box sx={{ color: "white", display: "flex" }}>

                <img alt="" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/20/000000/external-left-arrows-kmg-design-flat-kmg-design-1.png" />&nbsp; <span> Custom Link</span>

            </Box>
            <Box sx={{ m: 2, color: "white" }} >
                https://testnetxyzxyz/trade?ref
            </Box>
            <Box sx={{ m: 2, color: "white", }}   >
                <TextField sx={{ bgcolor: "#242731", color: 'Highlight', border: "none", borderRadius: "15px", overflow: "hidden" }} label="Enter" variant="filled" />
            </Box>
            <Box sx={{ m: 2, color: "white", display: "flex", justifyContent: "space-around" }}   >
                <Button variant='contained' sx={{ color: "white", borderRadius: "10px" }} startIcon={<OutboxIcon />}>
                    Custom Link
                </Button>
                <Button variant="outlined" sx={{ color: "white", borderRadius: "10px" }} startIcon={<SendToMobileIcon />}>
                    Cancle
                </Button>
            </Box>

        </>
    )
}

export default CustomLink