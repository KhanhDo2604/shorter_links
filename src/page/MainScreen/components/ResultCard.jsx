import { Box, Button, Grid2, IconButton, Snackbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Utils from '../../../utils';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(() => ({
    multilineEllipsis: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'clip',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 2,
    },
    button: {
        borderRadius: 8,
        background: '#fc0349',
        width: '100%',
        color: '#fff',
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
    const classes = useStyles();
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
                    <Button onClick={handleCopy} className={classes.button}>
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
                            <CloseIcon color="#fff" />
                        </IconButton>
                    }
                />
            </Grid2>
        </Box>
    );
}

export default ResultCard;
