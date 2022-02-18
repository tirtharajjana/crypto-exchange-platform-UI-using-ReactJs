
import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
const AlertBox = () => {
    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={{ width: '100%', marginTop: 1 }}>
            <Collapse in={open}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    severity='info'
                    sx={{ mb: 2, borderRadius: "20px", bgcolor: "#ABE8FF", color: "darkblue" }}
                >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }} >
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto. Lorem. Lorem, ipsum.
                            </p>
                            <Button sx={{ bgcolor: "white", color: 'darkblue' }} size="small" variant="contained">Tutorial</Button>

                        </div>
                        <div className="">

                            <img alt="" src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-server-bitcoin-xnimrodx-lineal-gradient-xnimrodx.png" />
                        </div>
                    </Box>

                </Alert>
            </Collapse>

        </Box>
    );
}

export default AlertBox