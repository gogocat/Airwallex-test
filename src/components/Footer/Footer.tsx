import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './Footer.scss';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
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
            <Typography variant="h6" align="center" gutterBottom>
                BROCCOLI & CO.
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Something here to give the footer a purpose!
            </Typography>
            <Copyright />
        </Box>
    );
}

export default Footer;
