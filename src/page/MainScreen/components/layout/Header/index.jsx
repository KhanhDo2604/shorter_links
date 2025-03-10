import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, _params, classes) => ({
    container: {
        backgroundColor: '#04ddb2',
        paddingTop: 16,
        paddingBottom: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function Header({ children }) {
    const { classes } = useStyles();

    return (
        <Box>
            <Box className={classes.container}>
                <Typography variant="h4" fontWeight={700} color={'#fff'}>
                    Shorter Links
                </Typography>
            </Box>
            {children}
        </Box>
    );
}

export default Header;
