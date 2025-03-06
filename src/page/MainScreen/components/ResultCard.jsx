import { Box, Button, Grid2, Typography } from '@mui/material';

function ResultCard({ result }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(result['data']['tiny_url']);
    };

    return (
        <Box>
            <Grid2 container spacing={4}>
                <Grid2 size={5}>
                    <Typography variant="body2" gutterBottom>
                        {result['data']['url']}
                    </Typography>
                </Grid2>
                <Grid2 size={4}>
                    <Typography variant="body2" gutterBottom>
                        {result['data']['tiny_url']}
                    </Typography>
                </Grid2>
                <Grid2 size={4}>
                    <Typography variant="body2" gutterBottom>
                        {result['data']['created_at']}
                    </Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Button
                        onClick={handleCopy}
                        sx={{
                            borderRadius: 2,
                            background: '#fc0349',
                        }}
                    >
                        Copy
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default ResultCard;
