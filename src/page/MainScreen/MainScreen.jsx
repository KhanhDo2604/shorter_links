import { Box, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';

function MainScreen() {
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
            <Box bgcolor={'#f1eeee'} paddingY={4} paddingX={16} position={'relative'} fullWidth>
                <Box position={'absolute'} top={-(16 * 7) / 2} left={0} right={0} paddingX={16}>
                    <Box padding={4} bgcolor={'#3b3055'} borderRadius={4} gap={2} display={'flex'}>
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
                        />
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: 2,
                                background: '#04ddb2',
                                minWidth: 160,
                            }}
                            disableElevation
                            onClick={() => {
                                console.log('Get Started button clicked');
                            }}
                        >
                            Shorten it!
                        </Button>
                    </Box>

                    <Box>{/* List of result cards */}</Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MainScreen;
