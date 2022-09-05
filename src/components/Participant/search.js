import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase({ search, setSearch, handleSearch }) {
    return (
        <Paper component="form" sx={{ p: '2px 4px', mb: 4, display: 'flex', alignItems: 'center', width: '90%' }}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Participants"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={search}
                onChange={handleSearch}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
