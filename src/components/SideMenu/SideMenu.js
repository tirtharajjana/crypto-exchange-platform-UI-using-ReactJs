import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuList from './MenuList';
const drawerWidth = 250;
const SideMenu = (props) => {


    const drawer = (
        <div style={{ color: 'white' }}>

            <List sx={{ display: 'flex', flexDirection: "column", justifyContent: "space-around", color: 'gray' }} >

                <MenuList />
            </List>



        </div >
    );



    return (
        <>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="persistent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: "35px", bottom: "-10px", backgroundColor: 'black', paddingX: "10px", paddingBottom: "20px" },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

        </>
    )
}

export default SideMenu