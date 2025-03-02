import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import MainScreen from './page/MainScreen';
import Header from './page/MainScreen/components/layout/Header';

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
        <Header>
            <MainScreen></MainScreen>
        </Header>
    );
}

export default App;
