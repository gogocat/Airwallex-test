import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InviteForm from 'components/Forms/InviteForm';

import './HeroIntro.scss';

function HeroIntro() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleDialogOpen = () => {
        setOpen(true);
    };

    const handleDialogClose = (event: any, reason: string) => {
        if (reason === 'backdropClick') {
            return;
        }
        setOpen(false);
    };

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
                    <Button 
                        variant="contained"
                        onClick={handleDialogOpen}
                    >
                        Request an invite
                    </Button>
                </Stack>
            </Container>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleDialogClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div className="dialog-close">
                    <IconButton onClick={(e)=>{handleDialogClose(e, '')}}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <DialogContent className="dialog-content">
                    <InviteForm
                        onSuccess={handleDialogClose}
                    />
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default HeroIntro;
