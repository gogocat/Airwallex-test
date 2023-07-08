import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import './HeroIntro.scss';

function HeroIntro() {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
            className="hero-intro"
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    A better way to enjoy everyday.
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Be the first to know when we launch.
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained">Request an invite</Button>
                </Stack>
            </Container>
        </Box>
    );
}

export default HeroIntro;
