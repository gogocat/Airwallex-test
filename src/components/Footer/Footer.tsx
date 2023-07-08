import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './Footer.scss';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'© '}
        {new Date().getFullYear()}
        {' Broccoli & co. All rights reserved.'}
        {'.'}
      </Typography>
    );
  }

function Footer() {
    return (
        <Box 
            sx={{ bgcolor: 'background.paper', p: 6 }} 
            component="footer"
            className='footer'
        >
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Make with &hearts; in Melbourne.
            </Typography>
            <Copyright />
        </Box>
    );
}

export default Footer;
