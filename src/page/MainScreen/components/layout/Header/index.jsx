import { Box, Typography } from '@mui/material';

function Header({ children }) {
    return (
        <Box>
            <Box
                bgcolor={'#04ddb2'}
                paddingY={2}
                fullWidth
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Typography variant="h4" fontWeight={700} marginBottom={0}>
                    Shorter Links
                </Typography>
            </Box>
            {children}
        </Box>
    );
}

export default Header;
