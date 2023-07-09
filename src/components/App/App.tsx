import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import HeroIntro from 'components/HeroIntro/HeroIntro';

import { 
    createTheme, 
    ThemeProvider
} from '@mui/material/styles';

const defaultTheme = createTheme();

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Header />
            <main className='main'>
                <HeroIntro />
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
