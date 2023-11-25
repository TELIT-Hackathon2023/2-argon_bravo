import HomePage from './pages/HomePage';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <HomePage />;
            <CssBaseline />
        </ThemeProvider>
    );
};

export default App;
