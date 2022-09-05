import React from 'react';
import { Box, Typography } from '@mui/material';

const styles = {
    box: {
        width: '90%',
        height: '60px',
        p: 2,
        backgroundColor: '#303030',
        display: 'flex',
        alignItems: 'center',
        mb: 1,
        borderRadius: 3,
    },
};

const Participant = ({ user, you }) => {
    return (
        <Box sx={styles.box}>
            <img
                src={
                    user.user?.photoURL ||
                    user.photoURL ||
                    'https://parkridgevet.com.au/wp-content/uploads/2020/11/Profile-300x300.png'
                }
                alt={user.user?.name || user.displayName || 'Anonymous'}
                className="block w-8 h-8 aspect-square rounded-full mr-2"
            />
            <Typography variant="body2">
                {user.user?.name || user.displayName}
                {you && '(you)'}
            </Typography>
        </Box>
    );
};

export default Participant;
