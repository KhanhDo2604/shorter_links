import { createTheme, ThemeProvider } from "@mui/material";
import MainScreen from "./page/MainScreen";

const theme = createTheme({
  palette: {
    type: "white",
    primary: "#04ddb2",
    secondary: "#767676",
    text: "#333",
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
  },
});

const responsiveTheme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <MainScreen></MainScreen>
    </ThemeProvider>
  );
}

export default App;
