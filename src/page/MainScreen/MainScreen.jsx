import { Box, Divider, Grid2, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from 'tss-react/mui';

import { useUrl } from '../../context/AppContext';
import ResultCard from '../../components/ResultCard';

const useStyles = makeStyles()((theme, _params, classes) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        boxSizing: 'border-box',
    },
    leftContainer: {
        display: 'flex',
        paddingBottom: 64,
        paddingTop: 64,
        paddingLeft: 128,
        paddingRight: 128,
        justifyContent: 'space-between',
    },
    rightContainer: {
        backgroundColor: '#f1eeee',
        paddingLeft: 128,
        paddingRight: 128,
    },
    inputContainer: {
        padding: 24,
        backgroundColor: '#3b3055',
        borderRadius: 16,
        gap: 16,
        display: 'flex',
    },
    inputTextField: {
        borderRadius: 8,
        background: '#fff',
        '& fieldset': {
            borderRadius: 8,
        },
        '& .MuiInputBase-input:-webkit-autofill': {
            borderRadius: 8,
        },
    },
    secondContainer: {
        paddingRight: 128,
        paddingLeft: 128,
    },
    btn: {
        borderRadius: 8,
        backgroundColor: '#04ddb2',
        minWidth: 160,
    },
    clearBtn: {
        color: '#fff',
        backgroundColor: '#fc0349',
    },
    listHeader: {
        marginTop: 16,
        fontWeight: 700,
    },
    gridContainer: {
        marginBottom: 16,
    },
    poster: {
        width: '40%',
        height: '50%',
    },
    divider: {
        marginBottom: 16,
        marginTop: 8,
    },
}));

function MainScreen() {
    const { classes, cx } = useStyles();
    const { newUrl, url, loading, setUrl, postUrl, clearHistory } = useUrl(); // replace with context

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;
        postUrl(formattedUrl);
    };

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.leftContainer}>
                <Box gap={16} width={'40%'}>
                    <Typography variant="h2" fontWeight={700} marginBottom={0}>
                        More than just shorter links
                    </Typography>
                    <Typography variant="body2" marginY={4} color={'#767676'}>
                        Build your brand's recognition and get detailed insights on how your links are performing.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 40,
                            background: '#04ddb2',
                        }}
                        disableElevation
                        onClick={() => {
                            console.log('Get Started button clicked');
                        }}
                    >
                        Get Started
                    </Button>
                </Box>
                <img
                    src="https://www.appealscentre.eu/wp-content/uploads/2024/07/Group-271.png"
                    alt="?"
                    loading="lazy"
                    className={classes.poster}
                />
            </Box>
            <Box className={classes.secondContainer}>
                <Box className={classes.inputContainer}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Shorten a link here ..."
                        fullWidth
                        size="small"
                        className={classes.inputTextField}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        className={classes.btn}
                        disableElevation
                        onClick={handleSubmit}
                        loading={loading}
                    >
                        Shorten it!
                    </Button>

                    {newUrl.length > 0 ? (
                        <Button onClick={clearHistory} className={cx(classes.btn, classes.clearBtn)}>
                            Clear History
                        </Button>
                    ) : null}
                </Box>
            </Box>
            {newUrl.length == 0 ? <Box paddingBottom={4}></Box> : null}
            {newUrl.length != 0 ? (
                <Box className={classes.rightContainer}>
                    <Box>
                        <Grid2 container spacing={3}>
                            <Grid2 size={5}>
                                <Typography variant="h6" className={classes.listHeader}>
                                    Original URL
                                </Typography>
                            </Grid2>

                            <Grid2 size={3}>
                                <Typography variant="h6" className={classes.listHeader}>
                                    Short URL
                                </Typography>
                            </Grid2>

                            <Grid2 size={3}>
                                <Typography variant="h6" className={classes.listHeader}>
                                    Date
                                </Typography>
                            </Grid2>

                            <Grid2 size={1}>
                                <Typography variant="h6" className={classes.listHeader}>
                                    Action
                                </Typography>
                            </Grid2>
                        </Grid2>
                        <Divider className={classes.divider} />
                    </Box>

                    <Box>
                        {newUrl.map((value, index) => {
                            return (
                                <Box key={index} className={classes.gridContainer}>
                                    <ResultCard key={index} result={value} />
                                    {index < newUrl.length - 1 && <Divider />}
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            ) : null}
        </Box>
    );
}

export default MainScreen;
