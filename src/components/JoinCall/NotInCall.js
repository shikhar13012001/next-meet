import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
// import Preview from "../../assets/preview.png";
import QR from '../QR';
import SERVER from '../../config';
import { FaQuoteLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
const NotInCall = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleOnClickJoin = () => {
        navigate(`/${id}`);
    };
    return (
        <section className="w-full h-screen">
            <div className="p-8 h-full">
                <div className="max-w-[700px] m-auto h-full flex flex-col items-center justify-between">
                    {/* Meeting code */}
                    <div className="w-full">
                        <Typography variant="h3">Join the call </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                        >
                            share the meet-code <QR url={`${SERVER}/${id}`} />
                        </Typography>

                        <Typography variant="subtitle1" color="GrayText">
                            {id}
                        </Typography>
                    </div>
                    {/* Number of people in the meet */}
                    <Box sx={{ width: '100%' }} className="flex items-center justify-center">
                        <Typography variant="h2" sx={{fontWeight:'bold'}}>
                            <FaQuoteLeft size={50} /> Great Meetings are just a click away
                        </Typography>
                    </Box>

                    {/* Join */}
                    <div className="w-full text-center">
                        <button
                            className="bg-white text-black w-full mt-4 font-bold p-4 rounded-2xl"
                            onClick={handleOnClickJoin}
                        >
                            Join call
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotInCall;
