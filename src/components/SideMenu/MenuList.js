import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import Switch from "react-switch";

// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
const MenuList = () => {
    return (
        <>
            <List>

                <ListItem button >
                    <img alt="" src="https://img.icons8.com/nolan/50/n.png" alt="" /><h2 style={{ color: "white" }} >Name</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img alt="" src="https://img.icons8.com/flat-round/20/000000/left--v1.png" />
                </ListItem>

                <ListItem button >
                    <ListItemIcon sx={{ color: 'background.paper' }} >
                        <HomeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>

                <ListItem button >
                    <ListItemIcon sx={{ color: 'background.paper' }} >
                        <AssessmentOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Section 1"} />
                </ListItem>

                <ListItem button >
                    <ListItemIcon sx={{ color: 'background.paper' }} >
                        <EqualizerOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Section 2"} />
                </ListItem>

                <ListItem button >
                    <ListItemIcon sx={{ color: 'background.paper' }} >
                        <AnalyticsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Section 3"} />
                </ListItem>

                <ListItem button >
                    <ListItemIcon sx={{ color: 'background.paper' }} >
                        <TimelineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Section 4"} />
                </ListItem>

                <ListItem button >
                    <ListItemIcon sx={{ color: 'background.paper' }} >
                        <StorageOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Section"} />
                </ListItem>

                <ListItem button >
                    <ListItemIcon sx={{ color: 'background.paper' }} >
                        <DonutLargeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Section 6"} />
                </ListItem>

                <ListItem button >
                    <ListItemIcon sx={{ color: 'background.paper' }} >
                        <ExtensionOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Section 7"} />
                </ListItem>

                <ListItem button >
                    <ListItemIcon sx={{ color: 'background.paper' }} >
                        <ShareOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Section 8"} />
                </ListItem>

                <ListItem button >
                    <ListItemIcon sx={{ color: 'background.paper' }} >
                        <ArticleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Documentation"} />
                </ListItem>
            </List>

            <List>

                <ListItem   >

                    <Button variant="text" color='info' style={{ backgroundColor: "#353945", color: "white" }} ><img alt="" src="https://img.icons8.com/plumpy/20/000000/circled-n.png" />$0.90</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="text" style={{ backgroundColor: "#A3E3FF" }} >Buy $xyz</Button>

                </ListItem>

                <ListItem button >

                    <img alt="" src="https://img.icons8.com/office/30/000000/globe.png" />&nbsp;&nbsp;

                    <Switch />
                </ListItem>

            </List>
        </>
    )
}

export default MenuList