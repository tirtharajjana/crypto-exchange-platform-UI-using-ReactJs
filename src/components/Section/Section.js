import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';


function MainTabPanel(props) {


    return (

        <TabPanel></TabPanel>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Section = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', p: 1 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Section" {...a11yProps(0)} />

                </Tabs>
                <Button sx={{ color: "white" }} variant="outlined">
                    <img alt="" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/20/000000/external-wallet-banking-and-finance-kiranshastry-gradient-kiranshastry.png" />&nbsp; 0.2 $XYZ &nbsp;
                    <Chip label="Tire 1" color="primary" size="small" />
                </Button>

            </Box>
            <MainTabPanel value={value} index={0}>
                Item One
            </MainTabPanel>

        </Box>
    );

}

export default Section