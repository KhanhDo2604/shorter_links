import { Box, Button, TextField, Typography } from '@mui/material';

function MainScreen() {
    return (
        <Box padding={40} display={'flex'} flexDirection={'column'} gap={16}>
            <Box display={'flex'} width={'100%'} gap={16}>
                <Box gap={16} width={'40%'}>
                    <Typography variant="h1" gutterBottom>
                        More than just shorter links
                    </Typography>
                    <Typography variant="body2">
                        Build your brand's recognition and get detailed insights on how your links are performing.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 40,
                        }}
                        color="primary"
                    >
                        Get Started
                    </Button>
                </Box>
                <Box width={'40%'} src="images/illustration-working.svg" alt="Illustration Working"></Box>
            </Box>
            <Box padding={16} bgcolor={'#eff1f7'} borderRadius={8} gap={8} display={'flex'}>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    placeholder="Shorten a link here ..."
                    fullWidth
                    sx={{
                        backgroundColor: 'white',
                    }}
                />
                <Button variant="contained" color="primary">
                    Shorten it!
                </Button>
            </Box>

            <Box>{/* List of result cards */}</Box>
        </Box>
    );
}

export default MainScreen;
