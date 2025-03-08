import { Box, Divider, Grid2, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

import Constant from '../../data/constant';
import ResultCard from './components/ResultCard';

const useStyles = makeStyles(() => ({
    listHeader: {
        marginBottom: 14,
        marginTop: 16,
        fontWeight: 700,
    },
    gridContainer: {
        marginBottom: 16,
    },
}));

function MainScreen() {
    const [newUrl, setNewUrl] = useState([]); // bring into state
    const [url, setUrl] = useState(''); // bring into state
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const process = import.meta.env;

    useEffect(() => {
        const items = localStorage.getItem('items');
        if (items) {
            setNewUrl(JSON.parse(items));
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;

        try {
            setLoading(true);
            await axios
                .post(
                    `${Constant.url}/create`,
                    {
                        url: formattedUrl,
                        domain: 'tinyurl.com',
                        expires_at: null,
                        description: 'string',
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
                        },
                    },
                )
                .then((res) => {
                    setLoading(false);

                    const historyItem = {
                        originalUrl: url,
                        shortUrl: res.data['data']['tiny_url'],
                        createdAt: res.data['data']['created_at'],
                    };

                    setNewUrl((prevData) => {
                        const data = [historyItem, ...prevData];
                        return data;
                    });
                    localStorage.setItem('items', JSON.stringify(newUrl)); // store in local storage
                });
        } catch (e) {
            console.log('error:', e);
            setLoading(false);
        }
    };

    return (
        <Box display={'flex'} flexDirection={'column'} gap={4} boxSizing={'border-box'}>
            <Box display={'flex'} paddingX={16} paddingY={8} justifyContent={'space-between'}>
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
                    width={'40%'}
                />
            </Box>
            <Box bgcolor={'#f1eeee'} paddingY={4} paddingX={16} position={'relative'}>
                <Box position={'absolute'} top={-(16 * 6) / 2} left={0} right={0} paddingX={16}>
                    <Box padding={3} bgcolor={'#3b3055'} borderRadius={4} gap={2} display={'flex'}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Shorten a link here ..."
                            fullWidth
                            size="small"
                            sx={{
                                borderRadius: 2,
                                background: '#fff',
                                '& fieldset': {
                                    borderRadius: 2,
                                },
                            }}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: 2,
                                background: '#04ddb2',
                                minWidth: 160,
                            }}
                            disableElevation
                            onClick={handleSubmit}
                        >
                            Shorten it!
                        </Button>
                    </Box>

                    {newUrl.length != 0 ? (
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
                        </Box>
                    ) : null}

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
            </Box>
        </Box>
    );
}

export default MainScreen;
