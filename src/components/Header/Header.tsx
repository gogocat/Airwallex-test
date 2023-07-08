import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import './Header.scss';

function Header() {
    return (
        <AppBar position="relative" className='header'>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    BROCCOLI & CO.
                </Typography>
            </Toolbar>
      </AppBar>
    )
}

export default Header;
