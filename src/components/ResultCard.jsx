import { useState } from 'react';
import { Box, Button, Grid2, IconButton, Snackbar, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import CloseIcon from '@mui/icons-material/Close';

import Utils from '../utils';

const useStyles = makeStyles()((theme, _params, classes) => ({
    multilineEllipsis: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'clip',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 2,
    },
    copyBtn: {
        borderRadius: 8,
        backgroundColor: '#fc0349',
        color: '#fff',
        width: '100%',
    },
    gridItem: {
        display: 'flex',
        alignItems: 'center',
    },
    gridContainer: {
        marginBottom: 16,
    },
}));

function ResultCard({ result }) {
    const { classes } = useStyles();
    const [open, setOpen] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(result['shortUrl']);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Grid2 container spacing={3} className={classes.gridContainer}>
                <Grid2 size={5} className={classes.gridItem}>
                    <Typography variant="body2" className={classes.ellipsis}>
                        {result['originalUrl']}
                    </Typography>
                </Grid2>

                <Grid2 size={3} className={classes.gridItem}>
                    <Typography variant="body2">{result['shortUrl']}</Typography>
                </Grid2>

                <Grid2 size={3} className={classes.gridItem}>
                    <Typography variant="body2">{Utils.formateDate(result['createdAt'])}</Typography>
                </Grid2>

                <Grid2 size={1} className={classes.gridItem}>
                    <Button onClick={handleCopy} className={classes.copyBtn}>
                        Copy
                    </Button>
                </Grid2>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Copied to clipboard"
                    action={
                        <IconButton onClick={handleClose}>
                            <CloseIcon color="primary" />
                        </IconButton>
                    }
                />
            </Grid2>
        </Box>
    );
}

export default ResultCard;
