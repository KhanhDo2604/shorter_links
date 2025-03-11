import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { AppProvider } from './context/AppContext';

import MainScreen from './page/MainScreen';
import Header from './components/layout/Header';

// const theme = createTheme({
//     palette: {
//         mode: 'light',
//         primary: {
//             main: '#04ddb2',
//         },
//         secondary: {
//             main: '#767676',
//         },
//         text: '#333',
//     },
//     typography: {
//         fontFamily: 'Roboto, sans-serif',
//         fontSize: 16,
//     },
// });

// const responsiveTheme = responsiveFontSizes(theme);

function App() {
    return (
        // <ThemeProvider theme={theme}>
        //     <MainScreen></MainScreen>
        // </ThemeProvider>
        <AppProvider>
            <Header>
                <MainScreen></MainScreen>
            </Header>
        </AppProvider>
    );
}

export default App;
