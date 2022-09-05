import { useState } from 'react';
import { useSelector } from 'react-redux';
import OpenMenuIcon from '../components/OpenMenuIcon';
import withAuth from '../utils/withAuth';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { Typography } from '@mui/material';
import JOIN from '../assets/home2.png';
import JOIN1 from '../assets/home.png';
import JOIN2 from '../assets/join.png';
import { Box } from '@mui/system';
import {Divider} from "@mui/material"
const Home = () => {
    const navigate = useNavigate();

    const [meetingCode, setMeetingCode] = useState('');
    const { userName, isMenuOpen } = useSelector((state) => state.hackathon);

    if (isMenuOpen) {
        return <Menu />;
    }

    const handleOnClickJoin = () => {
        navigate(`/${meetingCode}`);
    };

    const handleOnClickStartNewCall = () => {
        navigate(`/preview/${v4()}`);
    };

    return (
        <section className="w-full h-screen">
            <div className="p-8 h-full">
                <div className="max-w-[700px] m-auto h-full flex flex-col items-center justify-between">
                    {/* Top three lines */}
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-4xl">Hi {userName}.</p>
                            <OpenMenuIcon />
                        </div>
                        <div className="mt-5">
                            <Typography variant="h6">High quality calls.</Typography>
                            <Typography variant="subtitle1" color="GrayText">
                                For FREE!
                            </Typography>
                        </div>
                    </div>
                    <Box sx={{ width: '100%' }} className="flex items-center justify-center">
                        
                        <img src={JOIN} alt="join" />
                        {/* <img src={JOIN2} alt="join" width="150px" height="150px" /> */}
                        <img src={JOIN1} alt="join" width="150px" height="150px" />
                        
                    </Box>

                    {/* Join meet */}
                    <form className="flex flex-col gap-4 items-center w-full">
                        <input
                            type="text"
                            placeholder="Enter code"
                            className="w-full"
                            value={meetingCode}
                            onChange={(e) => setMeetingCode(e.target.value)}
                        />
                        <button
                            className="bg-neutral-300 text-black w-full mt-4 font-bold p-4 rounded-2xl hover:bg-white duration-300"
                            onClick={handleOnClickJoin}
                        >
                            Join
                        </button>
                    </form>
                    {/* Start new call */}

                    <div className="w-full text-center">
                        <button
                            className="bg-white text-black w-full mt-4 font-bold p-4 rounded-2xl"
                            onClick={handleOnClickStartNewCall}
                        >
                            Start new call
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default withAuth(Home);
