import React from 'react';
import { Typography } from '@mui/material';
import QR from '../QR';
const NotInCall = ({ handleOnClickJoin, id, presentUsers }) => {
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
                            share the meet-code <QR url={id} />
                        </Typography>

                        <Typography variant="subtitle1" color="GrayText">
                            {id}
                        </Typography>
                    </div>
                    {/* Number of people in the meet */}

                    <div className="text-xl font-semibold">{presentUsers.length} people are in the call</div>
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
