import React from 'react'
import SideMenu from './SideMenu/SideMenu'
import Grid from '@mui/material/Grid';
import Section from './Section/Section';
import CustomLink from './CustomLink/CustomLink';


const Body = () => {
    return (
        <>

            <Grid container spacing={2}>
                <Grid item lg={2.5} >
                    <SideMenu />
                </Grid>
                <Grid item lg={6.5} >
                    <Section />
                </Grid>
                <Grid item lg={3} >
                    <CustomLink />
                </Grid>

            </Grid>

        </>
    )
}

export default Body